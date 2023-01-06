// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//Packages
const emailValidator = require("email-validator")
const Inquirer = require("inquirer");
const fs = require("fs");

//Internal Modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Employee array
const employeeArray = [];

const addManager = [
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
            if (NaN(nameInput)) {
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
            if (NaN(nameInput)) {
                console.log(`Please enter a valid office number.`);
                return false;
            } else {
                return true;
            }
        }
    },
];