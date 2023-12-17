const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    host: "127.0.0.1",
    port: "5432",
    user: "kaden",
    password: "your password",
    database: "emergency_waitlist"
});

app.get('/patients', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM patients');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'An error occurred while fetching patients.' });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
