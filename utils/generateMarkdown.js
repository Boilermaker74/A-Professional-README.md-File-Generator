// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Creating a function that returns a language badge based on which language that is passed in
function renderLanguageBadge(languages) {
    return `![Github license](https://img.shields.io/badge/Language-${languages}-blue.svg)`;
  }

// Creating a function that returns a TECH badge based on which Technology that is passed in
  function renderTechBadge(tech) {
    if (tech !== "N/A") {
      return `![Github license](https://img.shields.io/badge/Technology-${tech}-blue.svg)`;
    }
    return "";
  }




//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  by ${data.author}    ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Table of Contents
* [Installation](#installation)
* [How to Use This Application](#how-to-use-this-application)
* [Licenses](#Licenses)
* [Contributors](#contributors)
* [Testing](#testing)
* [Features](#features)
* [Languages and Technologies Used](#languages-and-technologies-used)
* [Dependencies](#dependencies)
* [Questions](#questions)

## Installation
${data.installation}
## How to Use This Application:
${data.usage}
## Licenses
${renderLicenseBadge(data.license)}
## Contributors
${data.contributors}
## Testing
${data.test}
## Features
${data.features}
## Languages and Technologies Used
${renderLanguageBadge(data.languages)}
${renderTechBadge(data.tech)}
## Dependencies
${data.require}
## Questions
Please send your questions by email:  ${data.email} or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}
module.exports = generateMarkdown;
