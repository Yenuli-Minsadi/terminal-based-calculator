const prompt = require("prompt-sync")()
const num1 = parseFloat(prompt("Enter 1st number "))
const num2 = parseFloat(prompt("Enter 2nd number "))
const sign = prompt("Enter sign ")

let result = 0;
let valid = true;
switch (sign) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        console.log("Invalid input");
        valid = false;
        break;
}

if (valid) console.log(num1, sign, num2, "=" , result);
