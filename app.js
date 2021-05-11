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

const validInput = (answer) => {
    if (answer === "") {
      return "This field cannot be empty";
    }
    return true;
  };
  
  const validEmail = function (email) {
    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  
    if (valid) {
      return true;
    } else {
      return "Please enter a valid email";
    }
  };

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
            name: 'managerName',
            validate: validInput,
        },
        {
            type: 'input',
            message: 'What is the Managers ID number?',
            name: 'id',
            validate: validInput,
        },
        {
            type: 'input',
            message: 'What is the Managers email?',
            name: 'email',
            validate: validEmail,
        },
        {
            type: 'input',
            message: 'What is the Managers office number?',
            name: 'officeNumber',
            validate: function (answer) {
                if (isNaN(answer)) {
                  return "Please enter a number";
                }
                return true;
              },
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
                name: 'engineerName',
                validate: validInput,
            },
            {
                type: 'input',
                message: 'What is the Engineers ID number?',
                name: 'id',
                validate: validInput,
            },
            {
                type: 'input',
                message: 'What is the Engineers email?',
                name: 'email',
                validate: validEmail,
            },
            {
                type: 'input',
                message: 'What is the Engineers GitHub username?',
                name: 'github',
                validate: validInput,
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
                        console.log('Success! Engineers details have been saved!');
                    });
                }
            })
    }

    const internQs = () => {
        inquirer.prompt([
    
            {
                type: 'input',
                message: 'What is the name of the Intern?',
                name: 'internName',
                validate: validInput,
            },
            {
                type: 'input',
                message: 'What is the Interns ID number?',
                name: 'id',
                validate: validInput,
            },
            {
                type: 'input',
                message: 'What is the Interns email?',
                name: 'email',
                validate: validEmail,
            },
            {
                type: 'input',
                message: 'What school does the Intern currently attend?',
                name: 'school',
                validate: validInput,
            },
            {
                type: 'confirm',
                message: 'Would you like to add another employee?',
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
                        console.log('Success! Interns details have been saved!!');
                    });
                }
            })
    }