const player = {};

const wWidth = $(window).width;
const wHeight = $(window).height;

const canvas = document.querySelector('#the-canvas');
const context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;

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
});