//
console.log("hello world!!");

function hello() {
    console.log("Hi Rami!");
}

function hello2(name) {
    console.log("Hi " + name);
}

function annoyingGreet(name, numTimes) {
    let counter = 0;

    while (counter < numTimes) {
        hello2(name);
        counter++;
    }
}

function sub(num1, num2) {
    let result = num1 - num2;
    return result;
}

// sum of numbers
function sumOfNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// square
function square(num1) {
    let result = num1 * num1;
    return result;
}

function square2(num1) {
    return num1 * num1;
}

// sum of squares
function sumOfSquares(num1, num2) {
    let a = square(num1);
    let b = square(num2);
    let result = sumOfNumbers(a, b);
    return result;
}

function sumOfSquares2(num1, num2) {
    return sumOfNumbers(square(num1), square(num2));
}

let answer = sub(10, 5);

console.log(sumOfNumbers(5, 10));
let answer2 = sumOfNumbers(10, 20);
console.log(answer2);

let answer3 = square(2);
console.log(answer3);

let answer4 = sumOfSquares(2, 4);
console.log(answer4);

hello();
hello2("Akilesh");
hello2("Jack");
annoyingGreet("Elyse", 100);

//