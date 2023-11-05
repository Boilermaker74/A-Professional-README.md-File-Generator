console.log("helloooo node!");
// Brings inquirer and fs into the file.

const inquirer = require('inquirer');
const fs = require('fs');

// // // Lets write to a file

// const content = 'Some content!';

// fs.writeFile('/Users/Bradm/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

// take some input from the command line

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];


inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});


// Lets write to a file

const content = answers.name;

fs.writeFile('/Users/Bradm/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});