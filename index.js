const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const createMarkdown = require("../utils/createMarkdown");
//const createMarkdown = require("./utils/markdown.js");
//const Choices = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description for your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the Usage?"
    },
    {
        type: "list",
        name: "License",
        message: "What Licenses should your project have?",
        choices: ["License 1", "License 2", "License 3"]
    },
    {
        type: "input",
        name: "contributing",
        message: "What is your contribution?"
    },
    {
        type: "input",
        name: "tests",
        message: "What is your test?"
    },
    {
        type: "input",
        name: "questions",
        message: "What is your questions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github portfilo name?"
    },

];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
            writeToFile("README.md", createMarkdown({
                ...inquirerResponses
            }))
            console.log(inquirerResponses)
        }

    )
}

// function call to initialize program
init();