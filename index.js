
const inquirer = require('inquirer');
const fs = require('fs');

const markdownGenerator = require('./develop/generatemarkdown');

// Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',      
    name: 'title',
},
{
    type: 'input',
    message: 'Please add a description of the project.',      
    name: 'description',
},
{
    type: 'input',
    message: 'How is the app installed and run?',      
    name: 'install',
},
{
    type: 'input',
    message: 'What are the usage instructions for the app?',      
    name: 'usage',
},
{
    type: 'input',
    message: 'Who else contributed to this project?',      
    name: 'contribution',
},
{
    type: 'input',
    message: 'What are the instructions for testing the app?',      
    name: 'testing',
},
{
    type: 'checkbox',
    message: 'What License does the app use?',      
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL', 'GNU', 'Mozilla Public License'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',      
    name: 'github',
},
{
    type: 'input',
    message: 'What is your contact email?',      
    name: 'email',
},
]


// Function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err){
            return console.log(err)
        }else {
            console.log("success")
        }

    })

}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('./develop/README.md', markdownGenerator(data));
            console.log(data)
            
    })    
}

// Function call to initialize app
init();