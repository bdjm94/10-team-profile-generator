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

employeeQs();

const managerQs = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the Manager?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the Managers ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the Managers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the Managers office number?',
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'addCheck',
        },

    ])
        .then(answers => {

            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);

            console.log(employees);

            if (answers.addCheck) {
                initialQuestion();
            } else {
                let data = render(employees);
                fs.writeFile(outputPath, data, (err) => {
                    if (err) throw err;
                    console.log('Success! Managers file has been saved!');
                });