#! /usr/bin/env node
//shabang
import inquirer from "inquirer";

console.log("-------------------------");
console.log("****SIMPLE CALCULATOR****");
console.log("-------------------------");

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Please select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber, "+", answer.secondNumber);
    console.log("your answer is", "=", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber, "-", answer.secondNumber);
    console.log("Your answer is", "=", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber, "*", answer.secondNumber);
    console.log("Your answer is", "=", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber, "/", answer.secondNumber);
    console.log("Your answer is", "=", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select The Valid operator");
}
