// dependencies
const inquirer = require('inquirer'); 
const util = require('util'); 
const Employee = require('./libs/Employee.js');
const Manager = require('./libs/Manager.js');
const Engineer = require('./libs/Engineer.js');
const Intern = require('./libs/Intern.js');
const fs = require('fs'); 
const axios = require('axios');
const generateHTML = require('./src/generate-html');
const writeFileAsync = util.promisify(fs.writeFile);
const team = []

// Manager information
const initialPrompt = () => {
    return inquirer.prompt([
        { 
          type: 'input',
          name: 'name', 
          message: "What is the team manager's name?"
        },

        {
         type: 'input',
         name: 'ID',
         message: "what is team manager's id?"
        },

        { 
        type: 'input', 
        name: 'email',
        message: "What is team managers email?"
       },

        { 
        type: 'input', 
        name: 'officeNumber', 
        message: "what is team manager's office number"
        }
    ]);
};

const empType = [
    {
        type: 'list',
        name: 'role', 
        message: 'What type of team member you would like to add?',
        default: 'Engineer',
        choices: ['Engineer', 'Intern', 'I dont want to add anymore team members']
        

    }
];


const engQuestions = [
    { 
     type: 'input',
     name: 'name', 
     message:"What is your engineer's name?"
    },
     
    { 
      type: 'input',
      name: 'ID',
      message: "What is your engineers id?"
     },

    { 
     type: 'input', 
     name: 'email',
     message: "what is your engineer's email?"
    },


    { 
        type: 'input', 
        name: 'github', 
        message: "What is your engineer's github username?" 
    }
];
const intQuestions = [
    { 
      type: 'input', 
      name: 'name', 
      message:"What is your Intern's name?"
     },

    { 
     type: 'input',
     name: 'ID',
     message: "what is your intern's id?"
    },

    { 
      type: 'input', 
      name: 'email', 
      message: "What is your intern's email?"
     },

    { 
      type: 'input',
      name: 'school', 
      message: "What is your intern's school"
    }
];

const addEmp = async () => {
    let answers = await inquirer.prompt(empType);
    try {
        switch (answers.role) {
            case "Engineer":
                answers = await inquirer.prompt(engQuestions);
                const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
                await team.push(engineer);
                await addEmp();
                break;
            case "Intern":
                answers = await inquirer.prompt(intQuestions);
                const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
                await team.push(intern);
                await addEmp();
                break;
            case "I dont want to add anymore team members":
                break;
            default: '';
        }
    } catch (err) {
        console.error(err);
    } finally {
        console.log('New Employee added to the organisation');
    };
}

// function to make the file 

const init = async () => {
    try {
        let answers = await initialPrompt();
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        //await console.log(manager);
        await team.push(manager);
        await addEmp();
        await writeFileAsync('./dist/teamprofile.html', generateHTML(team));
        await console.log('Success - html page has been created');
    }

 catch (err) {
        await console.error(err);
    }
    console.log("Done");
};



//calls the initiating function 

init();