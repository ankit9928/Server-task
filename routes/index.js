const express = require('express');
const router = express.Router();
const db = require('../db'); 

router.post('/records', async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const newRecord = { first_name, last_name };
    const createdRecord = await db.insertRecord('actors', newRecord);
    res.status(201).json(createdRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/records/:tableName', async (req, res) => {

  const { tableName } = req.params;

  try {
    const records = await db.getAllRecords(tableName);
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
    const updatedRecord = await db.updateRecord('actors', id, updatedData);
    res.json(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.delete('/records/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteRecord('actors',id);
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
