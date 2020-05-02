const player = {};
let orbs = [];
let players = [];

const socket = io.connect('http://localhost:3000');

const init = () => {
    draw();

    socket.emit('init', player.name);
};

socket.on('initReturn', data => {
    orbs = data.orbs;
});