const generateRandomColor = require('../utils/generateRandomColor');

class Orb {
    constructor() {
        this.color = generateRandomColor();
        this.strokeColor = generateRandomColor(this.color);
        this.locX = Math.floor(Math.random() * 500);
        this.locY = Math.floor(Math.random() * 500);
    }
}

module.exports = Orb;