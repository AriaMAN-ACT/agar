const generateRandomColor = require('../utils/generateRandomColor');

class Orb {
    constructor(radius = 5) {
        this.color = generateRandomColor();
        this.strokeColor = generateRandomColor(this.color);
        this.locX = Math.floor(Math.random() * 10000);
        this.locY = Math.floor(Math.random() * 10000);
        this.radius = radius;
    }
}

module.exports = Orb;