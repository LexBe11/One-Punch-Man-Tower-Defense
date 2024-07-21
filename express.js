const express = require('express');
const app = express();
app.use(express.json());

// Mock database or storage for players
const players = {}; // This should be replaced with actual database logic

// Middleware to authenticate requests (for demonstration only)
function authenticate(req, res, next) {
    // Implement actual authentication logic
    next();
}

app.post('/admin/give-coins', authenticate, (req, res) => {
    const { playerId, amount } = req.body;
    // Validate playerId and amount
    if (players[playerId]) {
        players[playerId].coins = (players[playerId].coins || 0) + amount;
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Player not found' });
    }
});

app.post('/admin/give-gems', authenticate, (req, res) => {
    const { playerId, amount } = req.body;
    // Validate playerId and amount
    if (players[playerId]) {
        players[playerId].gems = (players[playerId].gems || 0) + amount;
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Player not found' });
    }
});

app.post('/admin/give-units', authenticate, (req, res) => {
    const { playerId, unitName, amount } = req.body;
    // Validate playerId, unitName, and amount
    if (players[playerId]) {
        if (!players[playerId].units) players[playerId].units = {};
        players[playerId].units[unitName] = (players[playerId].units[unitName] || 0) + amount;
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Player not found' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
