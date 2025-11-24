const prompt = require("prompt-sync")()
const num1 = parseFloat(prompt("Enter 1st number "))
const num2 = parseFloat(prompt("Enter 2nd number "))
const sign = prompt("Enter sign ")

let result = 0
switch (sign) {
    case "+":
        result = num1 + num2;
        console.log(result);
        break;
    case "-":
        result = num1 - num2;
        console.log(result);
        break;
    case "*":
        result = num1 * num2;
        console.log(result);
        break;
    case "/":
        result = num1 / num2;
        console.log(result);
        break;
    case "%":
        result = num1 % num2;
        console.log(result);
        break;
}