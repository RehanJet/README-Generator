// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Mit':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Python':
      return '[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)';
    default:
      return ''
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license) {
    case 'Apache 2.0 License':
      return '[Apache 2.0 site](https://opensource.org/license/apache-2-0/)';
    case 'GNU':
      return '[GNU site](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Mit':
      return '[MIT site](https://opensource.org/license/mit/)';
    case 'Mozilla':
      return '[Mozilla site](https://opensource.org/license/mpl-2-0/)';
    case 'Python':
      return '[Python site](https://www.python.org/)';
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = '';
  } else {
    licenseSection = `License: ${license}`
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  # Professional README Generator
  ## ${renderLicenseSection(answers.projectLicense)} ${renderLicenseBadge(answers.projectLicense)}
  ### ${renderLicenseLink(answers.projectLicense)}
  ## Table of Contents
  ### - [Project](#Project)
  ### - [Description](#Description)
  ### - [Installation](#Installation)
  ### - [Project Usage](#ProjectUsage)
  ### - [Project Contributions](#ProjectContributions)
  ### - [Testing Instructions](#TestingInstructions)
  ### - [License Info](#License)
  ## Project
  ### ${answers.Title}
  ## Description
  ### ${answers.Description}
  ## Installtion
  ### ${answers.Installation}
  ## Usage
  ### ${answers.Usage}
  ## Contributors
  ### ${answers.Contributors}
  ## Testing Instructions
  ### ${answers.TestInformation}
  ## License Information
  ### ${answers.License}
`;
}

module.exports = generateMarkdown;