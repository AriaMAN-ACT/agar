player.locX = Math.floor(10000 * Math.random());
player.locY = Math.floor(10000 * Math.random());

let changeCenterX, changeCenterY, changeModeX, changeModeY;

const draw =() => {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 10000, 10000);

    let camX = -player.locX + canvas.width / 2;
    let camY = -player.locY + canvas.height / 2;
    changeCenterX = false;
    changeCenterY = false;

    if (camX > 0) {
        camX = 0;
        changeCenterX = true;
        changeModeX = 1;
    } else if (camX < -10000 + canvas.width) {
        camX = -10000 + canvas.width;
        changeCenterX = true;
        changeModeX = 2;
    }

    if (camY > 0) {
        camY = 0;
        changeCenterY = true;
        changeModeY = 1;
    } else if (camY < -10000 + canvas.height) {
        camY = -10000 + canvas.height;
        changeCenterY = true;
        changeModeY = 2;
    }

    context.translate(camX, camY);

    orbs.forEach(orb => {
        drawOrb(orb);
    });

    players.forEach(player => {
        drawOrb({
            color: player.color,
            strokeColor: player.strokeColor,
            locX: player.locX,
            locY: player.locY,
            radius: player.radius
        });
    });

    requestAnimationFrame(draw);
};