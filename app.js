const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const employeeQs = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the employee type from the below.',
            name: 'employeeType',
            choices: [Manager, Engineer, Intern]
        },
    ])
        .then(answer => {

            if (answer.employeeType === 'Manager') {
                managerQs();
            } else if
                (answer.employeeType === 'Engineer') {
                engineerQs();
            } else if
                (answer.employeeType === 'Intern') {
                internQs();
            }
            else {
                console.log('Employee type has been selected!');
                return;
            }
        })
}

employeeQsS();