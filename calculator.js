const prompt = require("prompt-sync")()

function getNum(numString){
    while(true){
        const num = parseFloat(prompt("Enter number " + numString + ": "));
        if (isNaN(num)) {
            console.log("Invalid Input");
        } else {
            return num;
        }
    }
}

const num1 = getNum('One');
const num2 = getNum('Two');
const sign = prompt("Enter sign: ");

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
        if (num2 === 0) {
            valid = false;
            console.log("Zero division error.");
        }
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        console.log("Invalid");
        valid = false;
        break;
}

if (valid) console.log(num1, sign, num2, "=" , result);
