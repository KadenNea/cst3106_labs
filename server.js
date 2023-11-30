// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Endpoint to roll dices
app.get('/roll-dices', (req, res) => {
    let diceValues = [];
    for (let i = 0; i < 5; i++) {
        // Random dice roll (1-6)
        diceValues.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ diceValues });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
