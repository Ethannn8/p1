for (let counter = 1; counter <= 10; counter++) {
    console.log(counter)
}

for (let counter = 10; counter > 0; counter -= 1) {
    console.log(counter)
}
for (let counter = 1; counter <= 10; counter += 2) {
    console.log(counter)
}

let oneCanvas = document.getElementById("one-canvas");
let ctx = oneCanvas.getContext("2d");

ctx.fillStyle = "Blue";
ctx.fillRect(0, 0, 500, 400);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(500, 400);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(500, 0);
ctx.lineTo(0, 400);
ctx.stroke();


//draw circle
ctx.beginPath();
ctx.arc(250, 200, 10, 0, 2 * Math.PI);
ctx.strokeStyle = "Red";
ctx.stroke();

for (let circle = 10; circle <= 200; circle = circle += 20) {
    ctx.beginPath();
    ctx.arc(250, 200, circle, 0, 2 * Math.PI);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}