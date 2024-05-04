'#!/usr/bin/env node'

import inquirer from "inquirer";
import chalk from "chalk";


let todo: string[] = ["Mohsin"];

async function newFunction(todo: string[]) {
    do {

        let welcome = console.log("welcome to todo list app!");

        let operation = await inquirer.prompt([
            {

                name: "operator",
                message: "what you want to do ? ",
                type: "list",
                choices: ["Add", "View", "Update", "Delete"],

            }

        ]);

        if (operation.operator === "Add") {
            let add = await inquirer.prompt(
                {

                    name: "additems",
                    message: "plz add items",
                    type: "input",

                }
            );

            todo.push(add.additems);
            console.log(todo);

        }

        if (operation.operator === "View") {
            console.log(todo);
        };


        if (operation.operator === "Update") {

            let update = await inquirer.prompt(
                {

                    name: "updateitems",
                    message: "select to update items",
                    type: "list",
                    choices: todo

                },

            );

            let upDate = await inquirer.prompt({
                name: "updateitems2",
                message: " update items",
                type: "input",
            })

            let newTodo = todo.filter(val => val != update.updateitems)
            todo = [...newTodo, upDate.updateitems2]

        };

        if (operation.operator === "Delete") {
            let remove = await inquirer.prompt(
                {

                    name: "deleteitems",
                    message: "select item to delete",
                    type: "list",
                    choices: todo

                },

            );

        };

    } while (true);
};


newFunction(todo);