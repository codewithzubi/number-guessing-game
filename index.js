#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
const guessGame = await inquirer.prompt([
    { message: "Enter The Your Number Between 1 to 10 : ", type: "number", name: "user" },
]);
//CONDITIONAL STATMENT
if (guessGame.user === randomNumber) {
    console.log("!!!!!!!!!!!🏆 🏆 Yeaaaa Your Number Is Correct  You Win  🏆 🏆!!!!!!!!!!!!!!");
}
else {
    console.log("😟 Please Try Again Better Luck NExt Time 😟");
}
