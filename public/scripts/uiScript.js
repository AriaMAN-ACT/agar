let player = {};
let orbs = [];
let players = [];

const canvas = document.querySelector('#the-canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', event => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

$(window).load(() => {
    $('#loginModal').modal('show');
});

$('.name-form').submit(event => {
    event.preventDefault();
    player.username = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show');
    document.querySelector('.player-name').innerHTML = player.username;
});

$('.start-game').click(event => {
    $('.modal').modal('hide');
    $('.hiddenOnStart').removeAttr('hidden');
    init();
});