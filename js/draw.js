function drawPaddles(){
    ctx.beginPath(); //firstPaddle
    ctx.rect(x1p, y1p, w1p, h1p);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath(); //secoundPaddle
    ctx.rect(x2p, y2p, w2p, h2p);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBlock(){ //blockOnMid
    ctx.beginPath();
    ctx.rect(xBlock, yBlock, wBlock, hBlock);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall(){ //ball
    ctx.beginPath();
    ctx.arc(xBall, yBall, rBall, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawWhoWin(whoWin){
    if(whoWin == "left"){
        xWhoWin = 100;
        yWhoWin = 100;
    } else if(whoWin == "right"){
        xWhoWin = 600;
        yWhoWin = 100;
    }
    ctx.beginPath();
    ctx.font = "30px Consolas";
    ctx.fillText("Won " + whoWin + " player!", xWhoWin, yWhoWin);
    ctx.closePath();
}
