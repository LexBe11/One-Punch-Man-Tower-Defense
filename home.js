function updateInventory(playerId) {
    // Fetch player data and update inventory display
    fetch(`/player/${playerId}/data`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('unitsCount').innerText = data.units || 0;
            document.getElementById('gemsCount').innerText = data.gems || 0;
            document.getElementById('coinsCount').innerText = data.coins || 0;
        })
        .catch(error => console.error('Error:', error));
}
