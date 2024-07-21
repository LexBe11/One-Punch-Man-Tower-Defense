// Initialize canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let money = 0;
let gems = 0;
let towers = [];
let enemies = [];
let crates = [];
let currentWave = 0;

// Tower Types with costs
const towerTypes = {
    "Saitama": { cost: 100, damage: Infinity, usdCost: 5 },
};

// Crate Types with rewards
const crateTypes = [
    { item: "Saitama", chance: 0.6 },
    { item: "Serious Saitama", chance: 0.3 },
    { item: "Terra 2 Saitama", chance: 0.1 }
];

// Functions
function buyUnit(type) {
    const tower = towerTypes[type];
    if (money >= tower.cost) {
        money -= tower.cost;
        addTower(type, Math.random() * (canvas.width - 50), Math.random() * (canvas.height - 50));
        updateUI();
    } else {
        alert('Not enough money!');
    }
}

function buyCrate() {
    if (money >= 200) {
        money -= 200;
        const crateItem = getRandomCrateItem();
        addTower(crateItem, Math.random() * (canvas.width - 50), Math.random() * (canvas.height - 50));
        updateUI();
    } else {
        alert('Not enough money!');
    }
}

function purchaseItem(item, amountUSD) {
    // Integrate with a payment gateway to handle real money transactions
    console.log(`Attempting to purchase ${item} for ${amountUSD} USD`);
    // Example: You'd need a backend service to handle this purchase and update the player's account
    // After successful purchase, update the player's in-game currency
    fetch(`/purchase?item=${item}&amount=${amountUSD}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              addTower(item, Math.random() * (canvas.width - 50), Math.random() * (canvas.height - 50));
              updateUI();
          } else {
              alert('Purchase failed!');
          }
      });
}

function giveMoney(amount) {
    money += amount;
    updateUI();
}

function giveGems(amount) {
    gems += amount;
    updateUI();
}

function updateUI() {
    document.getElementById('shop').innerHTML = `
        <h2>Shop</h2>
        <div class="item">
            <button onclick="buyUnit('Saitama')">Buy Saitama (100 Coins)</button>
        </div>
        <div class="item">
            <button onclick="buyCrate()">Buy Crate (200 Coins)</button>
        </div>
        <div class="item">
            <button onclick="purchaseItem('Saitama', 5)">Buy Saitama (5 USD)</button>
        </div>
        <div class="item">
            <p>Money: ${money} Coins</p>
            <p>Gems: ${gems}</p>
        </div>
    `;
}

function addTower(type, x, y) {
    towers.push({
        type: type,
        x: x,
        y: y,
        width: 50,
        height: 50,
        damage: towerTypes[type].damage
    });
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw towers
    towers.forEach(tower => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(tower.x, tower.y, 50, 50);
    });
    // Draw money and gems
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText(`Money: ${money}`, 10, 30);
    ctx.fillText(`Gems: ${gems}`, 10, 60);
}

// Game loop
function gameLoop() {
    drawGame();
    requestAnimationFrame(gameLoop);
}

// Initialize
updateUI();
gameLoop();
