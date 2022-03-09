//set variables
let oneCanvas = document.getElementById("my-canvas");
let ctx = oneCanvas.getContext("2d");
let IMG_WIDTH = 100;
let IMG_HEIGHT = 100;
let replayGame = "yes"
let goomyHP = 20;
let charzardHP = 20;
let charzardAttack = Math.floor(Math.random() * 12 + 7);
let nIntervID;
let goomyXPos = 40;
let goomyYPos = 350;

//get my images 
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let goomy = document.getElementById("goomyImg");
let charzard = document.getElementById("charzardImg");

//draw the image
function drawImage() {
    ctx.drawImage(goomy, goomyXPos, goomyYPos, IMG_WIDTH, IMG_HEIGHT);
    ctx.drawImage(charzard, 530, 50, IMG_WIDTH, IMG_HEIGHT);
}


//refreshUI function to be able to refresh every second
function refreshUI() {
    drawImage();
    unkown();
    movePlayer();
    gameover();


}

//surf button function. This move will do extra damage because surf is a water type. 
function surf() {
    let goomyThunder = Math.floor(Math.random() * 11 + 5);
    charzardHP = charzardHP - goomyThunder;
    console.log("It is super affective! Goomy has done: " + goomyThunder + "damage! Charzard now has" + charzardHP + "left!");
    unkown();

    if (charzardHP < 100) {
        document.getElementById("surf-button ").disabled = true;
        document.getElementById("thunder-button ").disabled = true;
        document.getElementById("flamethrower-button ").disabled = true;
        document.getElementById("bodyslam-button ").disabled = true;

    }

    nIntervID = setInterval(charzardMove, 2000);

}
//thunder button function. This move will do normal damage
function thunderMove() {
    let goomySurf = Math.floor(Math.random() * 11 + 3); //randomizer for attack
    charzardHP = charzardHP - goomySurf; //set charzard HP after I attack
    console.log("Goomy has done: " + goomySurf + "damage! Charzard now has" + charzardHP + "left!");
    unkown();

    if (charzardHP < 100) {
        document.getElementById("surf-button ").disabled = true; //make all buttons disabled because we need to wait for the charzard to attack
        document.getElementById("thunder-button ").disabled = true;
        document.getElementById("flamethrower-button ").disabled = true;
        document.getElementById("bodyslam-button ").disabled = true;

    }
    nIntervID = setInterval(charzardMove, 2000);

}
//flamethrower button function. This move will do less damage because fire is not effective against fire
function flamethrowerMove() {
    let goomyFlamethrower = Math.floor(Math.random() * 11 + 1);
    charzardHP = charzardHP - goomyFlamethrower;
    console.log("Oh no! Flamethrower isn't very effective! Goomy has done: " + goomyFlamethrower + "damage! Charzard now has" + charzardHP + "left!");
    unkown();

    if (charzardHP < 100) {
        document.getElementById("surf-button ").disabled = true;
        document.getElementById("thunder-button ").disabled = true;
        document.getElementById("flamethrower-button ").disabled = true;
        document.getElementById("bodyslam-button ").disabled = true;

    }
    nIntervID = setInterval(charzardMove, 2000);
}
//body slam button function
function bodyslamMove() {
    let goomyBodyslam = Math.floor(Math.random() * 11 + 2);
    charzardHP = charzardHP - goomyBodyslam;
    console.log("Goomy has done: " + goomyBodyslam + "damage! Charzard now has" + charzardHP + "left!");
    unkown();

    if (charzardHP < 100) {
        document.getElementById("surf-button ").disabled = true;
        document.getElementById("thunder-button ").disabled = true;
        document.getElementById("flamethrower-button ").disabled = true;
        document.getElementById("bodyslam-button ").disabled = true;

    }
    nIntervID = setInterval(charzardMove, 2000);
}

// up down left right function
function keyPressed(event) {
    let key = event.keyCode;

    if (key === 37) {
        goomyXPos = goomyXPos - 3;

    } else if (key === 39) {
        goomyXPos = goomyXPos + 3;
    }

    if (key === 38) {
        goomyYPos = goomyYPos - 3;
    } else if (key === 40) {
        goomyYPos = goomyYPos + 3;
    }
}

function movePlayer() {
    if (goomyXPos <= 0) {
        goomyXPos = 0;
    } else if (goomyXPos > 630) {
        goomyXPos = 630;
    }

    if (goomyYPos > 360) {
        goomyYPos = 360;
    } else if (goomyYPos < 100) {
        goomyYPos = 100;
    }
}


//charzard enemy move
function charzardMove() {
    clearInterval(nIntervID);
    let charzardAttack = Math.floor(Math.random() * 12 + 6);
    goomyHP = goomyHP - charzardAttack;
    unkown();
    console.log("Charzard has done: " + charzardAttack + "damage! Goomy now has" + goomyHP + "left!");
    if (goomyHP < 100) {
        document.getElementById("surf-button ").disabled = false;
        document.getElementById("thunder-button ").disabled = false;
        document.getElementById("flamethrower-button ").disabled = false;
        document.getElementById("bodyslam-button ").disabled = false;

    }

}


//connect index to js

function unkown() {
    let goomyHealth = document.getElementById("goomy-meter");
    goomyHealth.value = goomyHP;
    let goomyParagraph = document.getElementById("goomy-paragraph");
    goomyParagraph.innerHTML = goomyHP;

    let charzardHealth = document.getElementById("charzard-meter")
    charzardHealth.value = charzardHP;
    let charzardParagraph = document.getElementById("charzard-paragraph");
    charzardParagraph.innerHTML = charzardHP;
}

function gameover() {
    if (charzardHP <= 0 || goomyHP <= 0) {

        replayGame = prompt("Game over! Would you like to play again?");

        if (replayGame == "yes") {
            startOver();

        } else if (replayGame == "no") {


            endGame();
            clearInterval(timer);
        }
    }
}


//timer to keep calling refreshUI
let timer = setInterval(refreshUI, 1);


function startOver() {
    goomyHP = 100;
    charzardHP = 100;
    unkown();
    drawImage();
    document.getElementById("surf-button ").disabled = false;
    document.getElementById("thunder-button ").disabled = false;
    document.getElementById("flamethrower-button ").disabled = false;
    document.getElementById("bodyslam-button ").disabled = false;

}

function endGame() {
    goomyHP = 0;
    charzardHP = 0;
    document.getElementById("surf-button ").disabled = true;
    document.getElementById("thunder-button ").disabled = true;
    document.getElementById("flamethrower-button ").disabled = true;
    document.getElementById("bodyslam-button ").disabled = true;
}