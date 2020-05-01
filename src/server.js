const dotenv = require('dotenv');
const socketio = require('socket.io');

dotenv.config({
    path: './config.env'
});

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

const io = socketio(server);

module.exports = io;