let oneCanvas = document.getElementById("my-canvas");
let ctx = oneCanvas.getContext("2d");
let IMG_WIDTH = 100;
let IMG_HEIGHT = 100;

let goomyHP = 100;
let charzardHP = 100;
let charzardAttack = Math.floor(Math.random() * 12 + 7);
let goomyXPos = 50;
let goomyYPos = 300;
let nIntervID;



let goomy = document.getElementById("goomyImg");
let charzard = document.getElementById("charzardImg");

function drawImage() {
    ctx.drawImage(goomy, goomyXPos, goomyYPos, IMG_WIDTH, IMG_HEIGHT);
    ctx.drawImage(charzard, 530, 50, IMG_WIDTH, IMG_HEIGHT);
}


function refreshUI() {
    charzardHP = 100;
    drawImage();
    unkown();

}

function surf() {
    let goomyAttack = Math.floor(Math.random() * 11 + 3);
    charzardHP = charzardHP - goomyAttack;
    console.log("Goomy has done: " + goomyAttack + "damage! Charzard now has" + charzardHP + "left!")
    unkown();

    if (charzardHP < 100) {
        document.getElementById("surf-button ").disabled = true;
        document.getElementById("thunder-button ").disabled = true;
        document.getElementById("flamethrower-button ").disabled = true;
        document.getElementById("bodyslam-button ").disabled = true;

    }

    goomyXPos = goomyXPos + 0.1;
    goomyYPos = goomyYPos + 0.1;

    nIntervID = setInterval(charzardMove, 2000);



}

function charzardMove() {
    clearInterval(nIntervID);
    let charzardAttack = Math.floor(Math.random() * 12 + 7);
    goomyHP = goomyHP - charzardAttack;
    unkown();
    console.log("Charzard has done: " + charzardAttack + "damage! Goomy now has" + goomyHP + "left!")
    if (goomyHP < 100) {
        document.getElementById("surf-button ").disabled = false;
        document.getElementById("thunder-button ").disabled = false;
        document.getElementById("flamethrower-button ").disabled = false;
        document.getElementById("bodyslam-button ").disabled = false;

    }

}



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


refreshUI();