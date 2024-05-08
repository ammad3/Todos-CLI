#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRed('\tTo Do List\n'))
let toDos = []
let condition = true;
while(condition){
let todoQues = await inquirer.prompt(
[
    {
        name: "quesOne",
        type: "input",
        message: "Add your Todos:"
    },
    {
        name: "quesTwo",
        type: "confirm",
        message: "Would you like to add some more..",
        default: "true"
    }
]
);

toDos.push(todoQues.quesOne);
console.log(toDos.join("\n"));
condition = todoQues.quesTwo;
}//loop