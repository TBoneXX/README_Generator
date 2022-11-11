
const inquirer = require('inquirer');
const fs = require('fs');

const markdowngenerator = require('./develop/generatemarkdown');

// Array of questions for user input
const questions = [];

inquirer 
    .prompt([
{
  type: 'input',
  message: 'What is the project title?'      
  name: 'title',


},
])
.then((response) =>
    response


)


// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();