const init = () => {
    draw();
};

player.locX = Math.floor(10000 * Math.random());
player.locY = Math.floor(10000 * Math.random());

const draw =() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(1, 0, 0, 1, 0, 0);

    const camX = -player.locX + canvas.width / 2;
    const camY = -player.locY + canvas.height / 2;
    context.translate(camX, camY);

    context.beginPath();
    context.fillStyle = 'rgb(0, 255, 255)';
    context.arc(player.locX, player.locY, 10, 0,  2 * Math.PI);
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'rgb(0, 255, 125)';
    context.stroke();
    context.closePath();
    requestAnimationFrame(draw);
};