const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  // host: "database-1.cxgoikmwoc00.eu-north-1.rds.amazonaws.com",
  host: process.env.POSTGRES_URL || "localhost",
  database: "chinook",
  password: "Sdyg0nkUXi1f",
  port: 5432,
});

const db = {
  async insertRecord(tableName, newRecord) {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO ${tableName} (first_name, last_name) VALUES ($1, $2) RETURNING *`,
        [newRecord.first_name, newRecord.last_name]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  async getAllRecords(tableName) {
    const client = await pool.connect();
    try {
      const result = await client.query(`SELECT * FROM ${tableName}`);
      return result.rows;
    } finally {
      client.release();
    }
  },

  async updateRecord(tableName, id, updatedData) {
    const client = await pool.connect();
    try {
      const updateQuery = `UPDATE ${tableName} SET first_name = $1, last_name = $2, last_update = $3 WHERE id = $4 RETURNING *`;

      const result = await client.query(updateQuery, [
        updatedData.first_name,
        updatedData.last_name,
        updatedData.last_update,
        id,
      ]);

      return result.rows[0];
    } finally {
      client.release();
    }
  },

  async deleteRecord(tableName, id) {
    const client = await pool.connect();
    try {
      await client.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]);
    } finally {
      client.release();
    }
  },
};

module.exports = db;
