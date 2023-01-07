//Packages
const emailValidator = require("email-validator");
const Inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/template.js");

//Internal Modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Employee array
const teamArray = [];

//home prompt - choose add an employee or end
const addEmployee = () => {
    Inquirer.prompt([
        {
            type: `list`,
            name: `employee`,
            message: `Would you like to:`,
            choices: [`Add a Manager`, `Add an Engineer`, `Add an Intern`, `Finish building my team`]
        }
    ]).then(userInput => {
        switch (userInput.employee) {
            case `Add a Manager`:
                addManager();
                break;
            case 'Add an Engineer':
                addEngineer();
                break;
            case 'Add an Intern':
                addIntern();
                break;
            default:
                init();
        }
    })
}

//Initial prompt - add a manager
const addManager = () => {
    Inquirer.prompt([
        {
            type: `input`,
            name: `managerName`,
            message: `What is your manager's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the manager's name.`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `managerId`,
            message: `What is your manager's employee ID?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a valid manager ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: `input`,
            name: `managerEmail`,
            message: `What is your manager's email address?`,
            validate: email => {
                if (emailValidator.validate(email)) {
                    return true;
                } else {
                    console.log(`Please enter a valid email address.`)
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `managerOffice`,
            message: `What is your manager's office number?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log(`Please enter a valid office number.`);
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamArray.push(manager);
        console.log(`Your manager has been added to the team!`);
        addEmployee();
    })
};

//function/prompt to add an Engineer to team
const addEngineer = () => {
    Inquirer.prompt([
        {
            type: `input`,
            name: `engineerName`,
            message: `What is your Engineer's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the engineer's name.`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `engineerId`,
            message: `What is your Engineer's employee ID?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a valid employee ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: `input`,
            name: `engineerEmail`,
            message: `What is your Engineer's email address?`,
            validate: email => {
                if (emailValidator.validate(email)) {
                    return true;
                } else {
                    console.log(`Please enter a valid email address.`)
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `engineerGithub`,
            message: `What is your Engineer's Github username?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log(`Please enter a Github username.`)
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        console.log(`Your engineer has been added to the team!`);
        addEmployee();
    })
};

//function/prompt to add an Intern to team
const addIntern = () => {
    Inquirer.prompt([
        {
            type: `input`,
            name: `internName`,
            message: `What is your Intern's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the Intern's name.`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `internId`,
            message: `What is your Intern's employee ID?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a valid manager ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: `input`,
            name: `internEmail`,
            message: `What is your Intern's email address?`,
            validate: email => {
                if (emailValidator.validate(email)) {
                    return true;
                } else {
                    console.log(`Please enter a valid email address.`)
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `internSchool`,
            message: `What school is your Intern attending?`,
            validate: nameInput => {
                if (!nameInput) {
                    console.log(`Please enter a valid institution.`)
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        console.log(`Your Intern has been added to the team!`);
        addEmployee();
    })
};

//init function to write html document
const init = () => {
    fs.writeFile(`./dist/teamProfile.html`, template(teamArray), (err) => {
        err ? console.error(err) : console.log('Your team profile has been generated!')
    })
};

addManager();
