function logicGame(){ //mainLogicOfGame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlock();
    drawPaddles();
    drawBall();

    collisionBall()
    moveAndCollisionPaddles();

    points();

    xBall += vxBall; //moveBall
    yBall += vyBall; //theSame
}






