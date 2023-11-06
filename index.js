//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// const { Console } = require("console");
const pressAnyKey = require("press-any-key");

// intro statement

  console.clear();
  console.log (" Welcome to the Readme Generator.\n\n This program will ask a series of fifteen questions.\n\n"+ 
  " Based on the user input, a professional README.md file will be produced in the parent directory.\n\n");
  pressAnyKey((" Press any key to begin the program, or CTRL+C to exit"), {
    ctrlC: "reject"
  })
    .then(() => {
      console.clear();
      init();
    })
    .catch(() => {
      console.log('You pressed CTRL+C')
    })

   
//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "1.  What is the title of the Project.",
  },

  {
    type: "input",
    name: "author",
    message: "2.  What is the author's name?",
  },
  


  {
    type: "input",
    name: "description",
    message: "3.  Give a short description of this project.\n      What was the motivation? \n      Why was this project built? \n      What problem did it solve? \n      What was learned? \n",
  },

  {
    type: "input",
    name: "link",
    message: "4.  Please provide a URL where a user can access your deployed application. \n"
  },
  {
    type: "checkbox",
    name: "license",
    message: "5.  Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },

  {
    type: "input",
    name: "installation",
    message: "6.  Describe the steps needed for installation.\n",
  },

  {
    type: "input",
    name: "usage",
    message: "7.  State how to use this project.\n",
  },
  {
    type: "input",
    name: "contributors",
    message: "8.  Please list any contributors. (Use GitHub usernames)",
    default: "",
  },



  {
    type: "input",
    name: "require",
    message: "9.  List any project dependencies here. \n",
  },

  {
    type: "input",
    name: "features",
    message: "10. List the interesting features of this project. \n",
  },

  {
    type: "checkbox",
    name: "languages",
    choices: ["HTML", "CSS", "JavaScript", "JQuerry"],
    message: "11.  State the languages used with this project.",
  },

  {
    type: "checkbox",
    name: "tech",
    choices: ["NodeJs", "Mysql", "N/A"],
    default:"N/A",
    message: "12.  State the technologies associated with this project.",
  },





  {
    type: "input",
    name: "creator",
    message: "13. Write your GitHub username.",
  },

{ 
    message: "14. Provide a valid email address.",
    name: "email",
    type: "input",
      default: () => {},
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
              return true;
          } else {
              console.log("  Please enter a valid email")
              return false;
          }
        }
      },

  {
    type: "input",
    name: "test",
    message: "15. Provide a walkthrough of required tests if applicable.\n",
    default: "N/A",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File in current directory. DONE!");
    writeToFile("./README.md", generateMarkdown({ ...responses }));
  });
}

