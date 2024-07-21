const express = require('express');
const app = express();
app.use(express.json());

app.post('/admin/give-coins', (req, res) => {
    const { amount } = req.body;
    // Logic to add coins to a player's account
    // For example, update a database or in-memory store
    console.log(`Giving ${amount} coins to a player.`);
    res.json({ success: true });
});

app.post('/admin/give-gems', (req, res) => {
    const { amount } = req.body;
    // Logic to add gems to a player's account
    console.log(`Giving ${amount} gems to a player.`);
    res.json({ success: true });
});

app.post('/admin/give-units', (req, res) => {
    const { unitName, amount } = req.body;
    // Logic to add units to a player's account
    console.log(`Giving ${amount} of ${unitName} to a player.`);
    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
