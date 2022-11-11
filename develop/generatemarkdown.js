// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
# Installation
${data.install}
# Usage
${data.usage}
# License
This project is licensed under the ${data.usage} license.
# Contribution
Contributors: ${data.contribution}
# Testing
${data.testing}
# Questions
For questions about this repo, application, or to provide feedback please contact me at ${data.email}
My GitHub repo can be found at github.com/${data.github}
`;
}

module.exports = generateMarkdown;