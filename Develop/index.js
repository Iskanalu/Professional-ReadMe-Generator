// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

 const generateREADME = ({ title, description, installation, usage, contribution, license, tests, github, email }) =>
 `
 # ${title}

 ## Description
    ${description}

## Table Of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation 
    ${installation}

## Usage 
    ${usage}

## Credits 
    ${contribution}

## License 
    ${license}

## Tests 
    ${tests}

## Questions
 - [GITHUB](https://github.com/${github})
 
 - [email](mailto:${email})`;

 // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the descriptions of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the instalation of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who is part of the contribution guidelines?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses the project use?',
        choices: ['apache' , 'eclipse' , 'MIT' ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests for the project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail adrress?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, (content, err) =>
    err? console.error(err) : console.log('Succes'));    
}

// TODO: Create a function to initialize app
function init() {
    // 1. Terminal to ask questions
inquirer
.prompt(questions)
.then((responses)=>{
// 2. Generate de READ ME text.
    const readtext = generateREADME(responses);
// 3. Create the READ ME File.
    writeToFile("README",  readtext);

});
    
}

// Function call to initialize app
init();
