const drawOrb = orb => {
    context.beginPath();
    context.fillStyle = orb.color;
    context.arc(orb.locX, orb.locY, orb.radius, 0,  2 * Math.PI);
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = orb.strokeColor;
    context.stroke();
    context.closePath();
};