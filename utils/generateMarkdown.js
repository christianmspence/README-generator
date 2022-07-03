// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return `http://www.linfo.org/bsdlicense.html`
  }
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'None') {
    return ''
  }

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'BSD') {
    return `This project is ocevered under the ${license} license. To learn more about this license, please click the license button at the top of the README.`
  }
  if (license === 'MIT') {
    return `This project is ocevered under the ${license} license. To learn more about this license, please click the license button at the top of the README.`
  }
  if (license === 'GPL') {
    return `This project is ocevered under the ${license} license. To learn more about this license, please click the license button at the top of the README.`
  }
  if (license === 'None') {
    return 'No license has been selected for this project.'
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  * Why was this project built?:<br/>
   ${data.why}
  * What problem does this project solve?:<br/>
   ${data.what}
  * How will a user utilize this project?<br/>
   ${data.how}
  * Future development plans:<br/>
   ${data.future}
  
## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
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

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions or Comments
  If you have any questions regarding the following project or repo, please contact me at [${data.email}] (mailto:${data.email}). 
  To view more projects please visit my GitHub at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
