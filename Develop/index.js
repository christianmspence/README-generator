// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you you build this project (required)',
            validate: whyInput => {
                if (whyInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'what',
            message: 'What problem does this project solve? (required)',
            validate: whatInput => {
                if (whatInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'how',
            message: 'How will a user utilize this project? (required)',
            validate: whyInput => {
                if (whyInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmFuture',
            message: 'Would you like to enter future development plans for this project?',
            default: true
        },
        {
            type: 'input',
            name: 'future',
            message: 'Please enter future development plans:',
            when: ({ confirmFuture }) => {
                if (confirmFuture) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the step-by-step installation instructions for this project? (required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide screenshots of your project along with instructions on how to use the project. (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to enter any credits for this project?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please provide a list of any collaborators, third-party assets, and/or tutorials used to create this project. Make sure to provide links. (required)',
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will you use for your project?',
            choices: ['BSD', 'MIT', 'GPL', 'None']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide guidelines for contributing. (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide examples for testing your application. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your answer!')
                    return false;
                }
            }
        },

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let info = generateMarkdown(data);
    fs.writeFile('README.md', info, function (error) {
        if (error) {
            return console.log(error)
        }
    });
 };

// TODO: Create a function to initialize app
function init () {

 }

// Function call to initialize app
init();
