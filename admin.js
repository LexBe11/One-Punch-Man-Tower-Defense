const correctPasscode = '287331';

// Show the admin panel
function showAdminPanel() {
    document.getElementById('passcodePrompt').style.display = 'block';
}

// Check the passcode
function checkPasscode() {
    const enteredPasscode = document.getElementById('passcodeInput').value;
    if (enteredPasscode === correctPasscode) {
        document.getElementById('passcodePrompt').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('Incorrect passcode.');
    }
}

// Function to give coins
function giveCoins() {
    const amount = parseInt(document.getElementById('coinsAmount').value, 10);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    // Send a request to the server to update the player's coins
    fetch('/admin/give-coins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert(`Given ${amount} coins.`);
              // Update inventory display (optional, if needed)
          }
      })
      .catch(error => console.error('Error:', error));
}

// Function to give gems
function giveGems() {
    const amount = parseInt(document.getElementById('gemsAmount').value, 10);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    // Send a request to the server to update the player's gems
    fetch('/admin/give-gems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert(`Given ${amount} gems.`);
              // Update inventory display (optional, if needed)
          }
      })
      .catch(error => console.error('Error:', error));
}

// Function to give units
function giveUnits() {
    const unitName = document.getElementById('unitName').value;
    const amount = parseInt(document.getElementById('unitsAmount').value, 10);
    if (!unitName || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid unit name and amount.');
        return;
    }
    // Send a request to the server to update the player's units
    fetch('/admin/give-units', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ unitName: unitName, amount: amount })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert(`Given ${amount} of ${unitName}.`);
              // Update inventory display (optional, if needed)
          }
      })
      .catch(error => console.error('Error:', error));
}
