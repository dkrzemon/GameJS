var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//startOrEndGame
var func = "logicGame()";
var ms = 10;
var interval = setInterval(func, ms);

//firstPaddle
var w1p = 80; //w - width, 1 - first, p - paddle
var h1p = 20; //h - height
var x1p = ((canvas.width - 520) - w1p)/2; //x - latitude
var y1p = canvas.height - 50; //y - longtitude

//secoundPaddle
var w2p = 80;
var h2p = 20;
var x2p = (((canvas.width - 520) - w2p)/2) + 520;
var y2p = canvas.height - 50;

//block
var wBlock = 40;
var hBlock = 250;
var xBlock = (canvas.width - wBlock)/2;
var yBlock = canvas.height - hBlock;

//ball
var rBall = 25; //r - radius
var xBall = (canvas.width - rBall)/2;
var yBall = hBlock - 50;
var vxBall = -5; //v - velocity
var vyBall = -5;

//points
var lPlayer = 0; //l - left
var rPlayer = 0; //r - right
var xPoints = xBlock - 12;
var yPoints = 50;
var winPoints = 5;

//countdown
var xC = xPoints;
var yC = 100;

//whoWin
var xWhoWin = 100;
var yWhoWin = 150;