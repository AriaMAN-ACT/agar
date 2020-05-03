const getAngleDeg = (ax,ay,bx,by) => {
    const angleRad = Math.atan((ay-by)/(ax-bx));
    return angleRad * 180 / Math.PI;
};

canvas.addEventListener('mousemove',(event)=>{
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    if (changeCenterX) {
        if (changeModeX === 1) {
            centerX = player.locX;
        } else {
            centerX = -player.locX + canvas.width / 2;
        }
    }

    if (changeCenterY) {
        if (changeModeY) {
            centerY = player.locY;
        } else {
            centerY = -player.locY + canvas.height / 2;
        }
    }

    const speed = 10;
    const angle = getAngleDeg(event.clientX, event.clientY, centerX, centerY);
    if (angle === 90) {
        if (event.clientY < window.innerHeight / 2) {
            socket.emit('tick', 270);
        } else {
            socket.emit('tick', 90);
        }
    } else if (angle === 0) {
        if (event.clientX < window.innerWidth / 2) {
            socket.emit('tick', 180);
        } else {
            socket.emit('tick', 0);
        }
    } else if (angle > 0) {
        if (event.clientY < window.innerHeight / 2) {
            socket.emit('tick', 180 + angle);
        } else {
            socket.emit('tick', angle);
        }
    } else {
        if (event.clientX < window.innerWidth / 2) {
            socket.emit('tick', angle + 90);
        } else {
            socket.emit('tick', angle + 270);
        }
    }

    // if (player.locX > 10000) {
    //     player.locX = 10000;
    // } else if (player.locX < 0) {
    //     player.locX = 0;
    // }
    //
    // if (player.locY > 10000) {
    //     player.locY = 10000;
    // } else if (player.locY < 0) {
    //     player.locY = 0;
    // }
});