console.log("hello");

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    if (key === 37) {
        playerXDirection = -1
    } else if (key === 39) {
        playerXDirection = 1
    }

    if (key === 38) {
        playerYDirection = -1
    } else if (key === 40) {
        playerYDirection = 1
    }


}

let playerX = 200;
let playerY = 250;
let playerSpeed = 5;
let playerXDirection = 0;
let playerYDirection = 0;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

let ballX = 100;
let ballY = 100;
let ballXDir = 10;
let ballYDir = 10;
const BALL_RADIUS = 20;


function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, 100, 20);

}

function movePlayer() {
    playerX += (playerSpeed * playerXDirection);
    playerY += (playerSpeed * playerYDirection);

    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 400) {
        playerX = 500 - PADDLE_WIDTH;
    }

    if (playerY > 480) {
        playerY = 480;
    } else if (playerY < 0) {
        playerY = 0;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function checkBallCollision() {
    if (ballY > 480 - BALL_RADIUS || ballY < 0 + BALL_RADIUS) {
        ballYDir = ballYDir * -1;
    }

    if (ballX > 500 || ballX < 0) {
        ballXDir = ballXDir * -1;
    }
}

function playerCollision() {

}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    playerCollision();
    checkBallCollision();
    moveBall();
    drawBall();
}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code: " + key;

    if (key === 37) {
        playerXDirection = 0;
    } else if (key === 39) {
        playerXDirection = 0;
    }

    if (key === 38) {
        playerYDirection = 0;
    } else if (key === 40) {
        playerYDirection = 0;
    }
}

/*
let xPosition = 0;
let yPosition = 0;
let xDirection = 1;
let xDirect = 1;


function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 2;

    if (yPosition >= 500) {
        yPosition = 0;
    }

}

xSpeed = 1;

function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(xDirection, 0, 20, 20);

    xDirection += xSpeed;

    if (xDirection >= 500) {
        xDirection = 500;
        xSpeed *= -1;

    } else if (xDirection <= 0) {
        xDirection = 1;
        xSpeed *= -1;

    }

}

/*
function moveHorizontal() {
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += 2;

    if (xPosition >= 500) {
        xPosition = 0;
    }

}

setInterval(moveHorizontal, 10);

setInterval(moveVertical, 10);
*/

//setInterval(bounceHorizontal, 10);
setInterval(refreshUI, 30);