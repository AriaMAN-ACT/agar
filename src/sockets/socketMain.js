const io = require('../server');

const Orb = require('../models/Orb');
const socketEvents = require('../models/socketEvents');
const Player = require('../models/Player');
const PlayerConfig = require('../models/PlayerConfig');
const PlayerData = require('../models/PlayerData');

let orbs = [];
const settings = {
    orbsCount: 2500,
    defaultSpeed: 10,
    defaultSize: 10,
    defaultZoom: 0,
    worldWidth: 10000,
    worldHeight: 10000
};

const initGame = () => {
    for (let i = 0; i < settings.orbsCount; i++) {
        orbs.push(new Orb(settings));
    }
};

initGame();

io.on('connect', socket => {
    socket.on(socketEvents.init, playerName => {
        const playerConfig = new PlayerConfig(settings);
        const playerData = new PlayerData(playerName, settings);
        const player = new Player(socket.id, playerConfig, playerData);
        socket.emit(socketEvents.initReturn, {
            orbs,
            player
        });
    });
});