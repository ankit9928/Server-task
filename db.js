// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'chinook',
  // password: 'password',
  port: 5432,
});

const db = {
  // Function to insert a new record into the database
  async insertRecord(newRecord) {
    const client = await pool.connect();
    try {
      // Execute SQL insert statement
      const result = await client.query('INSERT INTO your_table_name (column1, column2) VALUES ($1, $2) RETURNING *', [newRecord.column1, newRecord.column2]);
      return result.rows[0]; // Return the inserted record
    } finally {
      client.release(); // Release the client back to the pool
    }
  },

  // Function to retrieve all records from the database
  async getAllRecords() {
    const client = await pool.connect();
    try {
      // Execute SQL select statement
      const result = await client.query('SELECT * FROM your_table_name');
      return result.rows; // Return the list of records
    } finally {
      client.release(); // Release the client back to the pool
    }
  },

  // Function to update an existing record in the database
  async updateRecord(id, updatedData) {
    const client = await pool.connect();
    try {
      // Execute SQL update statement
      const result = await client.query('UPDATE your_table_name SET column1 = $1, column2 = $2 WHERE id = $3 RETURNING *', [updatedData.column1, updatedData.column2, id]);
      return result.rows[0]; // Return the updated record
    } finally {
      client.release(); // Release the client back to the pool
    }
  },

  // Function to delete a record from the database
  async deleteRecord(id) {
    const client = await pool.connect();
    try {
      // Execute SQL delete statement
      await client.query('DELETE FROM your_table_name WHERE id = $1', [id]);
    } finally {
      client.release(); // Release the client back to the pool
    }
  }
};

module.exports = db;
