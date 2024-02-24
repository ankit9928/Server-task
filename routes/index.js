const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database module

// Define your routes here
router.post('/records', async (req, res) => {
  try {
    const { column1, column2 } = req.body;
    const newRecord = { column1, column2 };
    const createdRecord = await db.insertRecord(newRecord);
    res.status(201).json(createdRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/records', async (req, res) => {
  try {
    const records = await db.getAllRecords();
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/records/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedRecord = await db.updateRecord(id, updatedData);
    res.json(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.delete('/records/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteRecord(id);
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
