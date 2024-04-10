#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let todos = []
let condition = true;
console.log(chalk.bgMagentaBright.white.bold("-------------TODO LIST------------\n"));
while(condition)
{
    let addtask=await inquirer.prompt(
[
    {
        name:"todo",
        type:"input",
        message:chalk.white("What do you want to add in your TODO List ? \n")
    },
    {
        name:"addmore",
        type:"confirm",
        message:chalk.blue("Do you want to add more ? \n"),
        default:'true'
    }
    ]
);
todos.push(addtask.todo);
console.log(todos);
(condition = (addtask.addmore));
}
