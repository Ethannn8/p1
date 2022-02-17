let oneCanvas = document.getElementById("my-canvas");
let ctx = oneCanvas.getContext("2d");
let IMG_WIDTH = 100;
let IMG_HEIGHT = 100;

let goomy = document.getElementById("goomyImg");
let charzard = document.getElementById("charzardImg");

function drawImage() {
    ctx.drawImage(goomy, 75, 300, IMG_WIDTH, IMG_HEIGHT);
}

function refreshUI() {
    drawImage();
}