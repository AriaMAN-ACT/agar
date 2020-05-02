const generateRandomColor = require('../utils/generateRandomColor');

class Orb {
    constructor(settings, radius = 5) {
        this.color = generateRandomColor();
        this.strokeColor = generateRandomColor(this.color);
        this.locX = Math.floor(Math.random() * settings.worldWidth);
        this.locY = Math.floor(Math.random() * settings.worldHeight);
        this.radius = radius;
    }
}

module.exports = Orb;