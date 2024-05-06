import inquirer from "inquirer";
let toDos = [];
let condition = true;
while (condition) {
    let todoQues = await inquirer.prompt([
        {
            name: "quesOne",
            type: "input",
            message: "What would you like to add in your Todos?"
        },
        {
            name: "quesTwo",
            type: "list",
            choices: ["Add", "Remove"]
        }
    ]);
    toDos.push(todoQues.quesOne);
    console.log(toDos.join("\n"));
    condition = todoQues.quesTwo;
}
