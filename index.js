import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10);
const guessGame = await inquirer.prompt([
    { message: "Enter The Your Number : ", type: "number", name: "user" },
]);
//CONDITIONAL STATMENT
if (guessGame.user === randomNumber) {
    console.log("!!!!!!!!!!!🏆 🏆 Yeaaaa Your Number Is Correct  You Win  🏆 🏆!!!!!!!!!!!!!!");
}
else {
    console.log("😟 Please Try Again Better Luck NExt Time 😟");
}
