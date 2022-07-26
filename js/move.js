//moveAndCollisionPaddles
var aPressed = false;
var dPressed = false;
var leftPressed = false;
var rightPressed = false;

function moveAndCollisionPaddles(){
    if(aPressed == true){
        x1p -= 7;
        if(x1p < 0){
            x1p = 0;
        }
    } else if(dPressed == true){
        x1p += 7;
        if(x1p > xBlock - w2p){
            x1p = xBlock - w2p;
        }
    }
    if(leftPressed == true){
        x2p -= 7;
        if(x2p < xBlock + wBlock){
            x2p = xBlock + wBlock;
        }
    } else if(rightPressed == true){
        x2p += 7;
        if(x2p > canvas.width - w2p){
            x2p = canvas.width - w2p;
        }
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.key == "a"){
        aPressed = true;
    } else if (e.key == "d"){
        dPressed = true;
    }

    if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    } else if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }

    //RESTART
    if(e.key == "r"){
        clearInterval(interval);
        defaultValues();
        lPlayer = 0;
        rPlayer = 0;
        interval = setInterval(func, ms, xC, yC);
    }
}

function keyUpHandler(e){
    if(e.key == "a"){
        aPressed = false;
    } else if (e.key == "d"){
        dPressed = false;
    }

    if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = false;
    } else if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = false;
    }
}