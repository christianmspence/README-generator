// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![Github licence](http://img.shields.io/badge/license-${license}-blue.svg)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ${renderLicenseLink(license)}
      `;
  } else {
    return ' ';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  * ${data.why}
  * ${data.what}
  * ${data.how}
  * ${data.future}
  
## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits] (#credits)
  4. [License](#license)
  5. [Contributing](#contribute)
  6. [Tests](#test)
  7. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## [License]
  The application is covered under the following license:
  ${renderLicenseSection(data.license)}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions or Comments
  If you have any questions regarding the following project or repo, please contact me at [${data.email}] (mailto:${data.email}). 
  To view more projects please visit my GitHub at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
