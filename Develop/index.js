// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",
    },

    {
        type: "input",
        message: "What are the project installation steps?",
        name: "Installation",
    },

    {
        type: "input",
        message: "What is the usage information for this project?",
        name: "Usage",
    },

    {
        type: "input",
        message: "Who are the contributing authors of this project?",
        name: "Contributors",
    },

    {
        type: "input",
        message: "What information are you testing for this project?",
        name: "TestInformation",
    },

    {
        type: "list",
        name: "License",
        message: "What license are you using for this project?",
        choices: ['Apache 2.0 License', 'GNU', 'Mit', 'Mozilla', 'Phython'],
    }
];

// TODO: Create a function to write README file
const createReadMe = createFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./sampleReadme.md', createFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
}   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {

        var createFile = generateMarkdown(answers);
        console.log(typeof createFile);
        createReadeMe(createFile);
    })
}  

// Function call to initialize app
init();
