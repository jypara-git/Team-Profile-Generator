const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid answer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid answer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid answer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: "What is your manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid answer!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'options',
            message: "If you would like to add more team members or finish choose from options below.",
            choices: ['Engineer', 'Intern', 'Finish'],
        }
    ])
};

const promptEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is Engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid answer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is Engineer's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid answer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is Engineer's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid answer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'username',
                message: "What is Engineer's GitHub username?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid answer!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'options',
                message: "If you would like to add more team members or finish choose from options below.",
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ])
        .then((engInfo) => {
            console.log(engInfo);
            if (engInfo.options === 'Engineer') {
                promptEngineer();
            }
        }) 
};

promptUser()
    .then((userInput) => {
        console.log(userInput);
        const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.number);
        if (userInput.options === 'Engineer') {
            promptEngineer()
        } 
    });
