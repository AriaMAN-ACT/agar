const io = require('../server');

const Orb = require('../models/Orb');
const socketEvents = require('../models/socketEvents');

let orbs = [];

const initGame = () => {
    for (let i = 0; i < 500; i++) {
        orbs.push(new Orb());
    }
};

initGame();

io.on('connect', socket => {
    socket.emit(socketEvents.init, {orbs});
});