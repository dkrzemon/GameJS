function collisionBall(){
    //withWalls
    if(xBall + vxBall < 0 + rBall){ //leftWall
        vxBall = -vxBall; //changeDirection
    }
    if(xBall + vxBall + rBall > canvas.width){ //rightWall
        vxBall = -vxBall;
    }
    if(yBall < 0 + rBall){ //upWall
        vyBall = -vyBall;
    }

    //withBlock
    if( (yBall + rBall > yBlock + 5) && //leftAndRightSideBlock
        (xBall + rBall + vxBall > xBlock) &&
        (xBall < xBlock + wBlock + rBall) ){
        vxBall = -vxBall;
    }
    if( (yBall + rBall > yBlock) && //upSideBlock
        (xBall > xBlock) &&
        (xBall < xBlock + wBlock) ){
        vyBall = -vyBall;
    }

    //withPaddles
    //leftSide
    if( (yBall + rBall + vyBall + h1p > y1p + h1p) && //ifHitPaddle
        (xBall + rBall + (vxBall*2) > x1p) &&
        (xBall + (vxBall*2) < x1p + w1p) ){
        vyBall = -vyBall;
    } else if( (yBall + rBall > y1p + h1p) && //ifFlyOut
               (xBall + rBall < xBlock) ){ 
        vyBall = -vyBall;
        rPlayer++;
        newRound();
    }

    //rightSide
    if( (yBall + rBall + vyBall + h2p > y2p + h2p) && //ifHitPaddle
        (xBall + rBall + (vxBall*2) > x2p) &&
        (xBall + (vxBall*2) < x2p + w2p) ){
        vyBall = -vyBall;
    } else if( (yBall + rBall > y2p + h2p) && //ifFlyOut
               (xBall > xBlock + wBlock) ){ 
        vyBall = -vyBall;
        lPlayer++;
        newRound();
    }
}