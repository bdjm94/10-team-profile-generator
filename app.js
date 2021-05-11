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
                employeeQs();
            } else {
                let data = render(employees);
                fs.writeFile(outputPath, data, (err) => {
                    if (err) throw err;
                    console.log('Success! Managers details have been saved!');
                });
            }
        })
    }

    const engineerQs = () => {
        inquirer.prompt([
    
            {
                type: 'input',
                message: 'What is the name of the Engineer?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is the Engineers ID number?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the Engineers email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the Engineers github username?',
                name: 'github',
            },
            {
                type: 'confirm',
                message: 'Would you like to add another employee?',
                name: 'addCheck',
            },
    
        ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github);
                employees.push(engineer);
    
                console.log(employees);
    
                if (answers.addCheck) {
                    employeeQs();
                } else {
                    let data = render(employees);
                    fs.writeFile(outputPath, data, (err) => {
                        if (err) throw err;
                        console.log('Success! Engineers details have been saved!!');
                    });
                }
            })
    }

    const internQs = () => {
        inquirer.prompt([
    
            {
                type: 'input',
                message: 'What is the interns name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is the interns employee id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the interns email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the interns school?',
                name: 'school',
            },
            {
                type: 'confirm',
                message: 'Do you need to enter another employee?',
                name: 'addCheck',
            },
    
        ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.id, answers.email, answers.school);
                employees.push(intern);
    
                console.log(employees);
    
                if (answers.addCheck) {
                    employeeQs();
                } else {
                    let data = render(employees);
                    fs.writeFile(outputPath, data, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                }
            })
    }