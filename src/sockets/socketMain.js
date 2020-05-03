const io = require('../server');

const Orb = require('../models/Orb');
const Player = require('../models/Player');
const PlayerConfig = require('../models/PlayerConfig');
const PlayerData = require('../models/PlayerData');
const socketEvents = require('../models/socketEvents');
const {checkForOrbCollisions, checkForPlayerCollisions} = require('../utils/checkCollisions');

let orbs = [];
let players = [];
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

setInterval(() => {
    io.to('game').emit(socketEvents.tock, {
        players
    });
}, 33);

io.on('connect', socket => {
    let player;
    socket.on(socketEvents.init, playerName => {
        socket.join('game');
        const playerConfig = new PlayerConfig(settings);
        const playerData = new PlayerData(playerName, settings);
        player = new Player(socket.id, playerConfig, playerData);
        players.push(playerData);
        socket.emit(socketEvents.initReturn, {
            orbs,
            player
        });
        socket.on('tick', data => {
            player.playerData.locX += Math.cos(data * Math.PI / 180) * player.playerConfig.speed;
            player.playerData.locY += Math.sin(data * Math.PI / 180) * player.playerConfig.speed;
        });
    });
});