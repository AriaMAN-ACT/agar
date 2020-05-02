const generateRandomColor = require('../utils/generateRandomColor');

class PlayerData {
    constructor(playerName, settings) {
        this.name = playerName;
        this.locX = Math.floor(settings.worldWidth * Math.random());
        this.locY = Math.floor(settings.worldHeight * Math.random());
        this.radius = settings.defaultSize;
        this.color = generateRandomColor();
        this.strokeColor = generateRandomColor(this.color);
        this.score = 0;
    }
}

module.exports = PlayerData;