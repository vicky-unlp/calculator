// variables

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const screen = document.getElementById('screen');
let displayValue = '';
let slicedDisplayValue = '';
let number1 = 0;
let number2 = 0;
let temp = 0;
let operator = 0;

// mathematical functions

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    console.log(sum);
}

function substract() {
    let rest = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        rest -= arguments[i]
    };
    console.log(rest);
}

function multiply() {
    let multip = 1;
    for (let i = 0; i < arguments.length; i++) {
        multip *= arguments[i];
    };
    console.log(multip);
}

function divide(dividend, divisor) {
    console.log(dividend/divisor);
}

// display

const getButtonContent = function(event) {
    let textContent = this.textContent;
    displayValue += textContent;
    if (displayValue.length <= 12) {
        screen.textContent = displayValue;
    } 
    else if (displayValue > 12) {
        slicedDisplayValue = displayValue.slice(-12);
        screen.textContent = slicedDisplayValue;
        console.log(displayValue);
    }
}

// input manipulation

const getFirstNumber = function(event) {
    temp = displayValue;
    console.log(temp);
    number1 = Number(temp.slice(0, -1));
    console.log(number1);
}

 const getOperator = function(event) {
    operator = this.textContent;
    console.log(operator);
}

// const getSecondNumber = function(event) {
    
// }

// event listeners

buttons.forEach((button) => button.addEventListener('click', getButtonContent));
operators.forEach((operator) => operator.addEventListener('click', getFirstNumber));
operators.forEach((operator) => operator.addEventListener('click', getOperator)); // cant use this inside a function that is inside another.

//equals.addEventListener('click', )

// functionality

// function operate() {
//     const num1 = Number(prompt('First number:'));
//     const operator = prompt('Operation:');
//     const num2 = Number(prompt('Second number:'));
//     if (operator === '+') {
//         return add(num1, num2);
//     }
//     else if (operator === '-') {
//         return substract(num1, num2);
//     }
//     else if (operator === '*') {
//         return multiply(num1, num2);
//     }
//     else if (operator === '/') {
//         return divide(num1, num2);
//     }
// }

// operate();