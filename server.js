const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Mock database
const users = {}; // You would use a real database in a production system

app.use(bodyParser.json());

// Endpoint for purchase
app.post('/purchase', (req, res) => {
    const { item, amount } = req.body;
    const userId = 'user1'; // This should be dynamic based on the logged-in user

    // Simulate payment verification
    if (verifyPayment(amount)) {
        // Update user's in-game data
        if (!users[userId]) users[userId] = { money: 0, gems: 0 };
        users[userId].money += 100; // Example: Add 100 coins for each purchase
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

function verifyPayment(amount) {
    // Simulate payment verification
    return true;
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
