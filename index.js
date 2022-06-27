// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    //return inquirer.prompt

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
    }

]

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the  `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData;
        })
}

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(readme => {
        return writeFile(readme);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })