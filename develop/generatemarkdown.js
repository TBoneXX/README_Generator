// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  }
  return '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'None') {
    return `## License

This project is licensed under the ${data.license} license.`;
  }
  return '';
}

// The function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}

## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contribution
Contributors: ${data.contribution}
## Testing
${data.testing}
## Questions
For questions about this repo, application, or to provide feedback please contact me at ${data.email}

My GitHub repo can be found at [GitHub](github.com/${data.github})
`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;