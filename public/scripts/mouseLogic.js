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
            player.locY -= speed;
        } else {
            player.locY += speed;
        }
    } else if (angle === 0) {
        if (event.clientX < window.innerWidth / 2) {
            player.locX -= speed;
        } else {
            player.locX += speed;
        }
    } else if (angle > 0) {
        if (event.clientY < window.innerHeight / 2) {
            const virtualAngle = angle + 180;
            player.locX += Math.cos(virtualAngle * Math.PI / 180) * speed;
            player.locY += Math.sin(virtualAngle * Math.PI / 180) * speed;
        } else {
            player.locX += Math.cos(angle * Math.PI / 180) * speed;
            player.locY += Math.sin(angle * Math.PI / 180) * speed;
        }
    } else {
        if (event.clientX < window.innerWidth / 2) {
            const virtualAngle = angle + 90;
            player.locX -= Math.sin(virtualAngle * Math.PI / 180) * speed;
            player.locY += Math.cos(virtualAngle * Math.PI / 180) * speed;
        } else {
            const virtualAngle = angle + 270;
            player.locX -= Math.sin(virtualAngle * Math.PI / 180) * speed;
            player.locY += Math.cos(virtualAngle * Math.PI / 180) * speed;
        }
    }

    if (player.locX > 10000) {
        player.locX = 10000;
    } else if (player.locX < 0) {
        player.locX = 0;
    }

    if (player.locY > 10000) {
        player.locY = 10000;
    } else if (player.locY < 0) {
        player.locY = 0;
    }
});