function defaultValues(){

    //firstPaddle
    w1p = 80;
    h1p = 20; 
    x1p = ((canvas.width - 520) - w1p)/2;
    y1p = canvas.height - 50;

    //secoundPaddle
    w2p = 80;
    h2p = 20;
    x2p = (((canvas.width - 520) - w2p)/2) + 520;
    y2p = canvas.height - 50;

    //block
    wBlock = 40;
    hBlock = 250;
    xBlock = (canvas.width - wBlock)/2;
    yBlock = canvas.height - hBlock;

    //ball
    rBall = 25;
    xBall = (canvas.width - rBall)/2;
    yBall = hBlock - 50;
}

function whoWin(){
    if(lPlayer == winPoints){
        drawWhoWin("left");
    } else if(rPlayer == winPoints){
        drawWhoWin("right");
    }
}

function newRound(){
    clearInterval(interval);
    defaultValues();
    if(lPlayer == winPoints || rPlayer == winPoints){
        whoWin();
    } else {
        interval = setInterval(func, ms, xC, yC);
    }
}