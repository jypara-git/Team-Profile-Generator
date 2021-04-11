const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { generatePage } = require('./src/page-template');
const employees = [];
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
            const engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.username);
            employees.push(engineer);
            if (engInfo.options === 'Engineer') {
                promptEngineer();
            }
            else if (engInfo.options === 'Intern') {
                promptIntern();
            } else {
                generatePage(employees);
                console.log(generatePage(employees));
            }
        }) 
};
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is Intern's name?",
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
            message: "What is Intern's employee ID?",
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
            message: "What is Intern's email address? ",
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
            name: 'school',
            message: "What is Intern's School?",
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
    .then((internInfo) => {
        console.log(internInfo);
        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
        employees.push(intern);
        if(internInfo.options === 'Intern'){
            promptIntern();
        }
        else if (internInfo.options === 'Engineer') {
            promptEngineer();
        } else {
            generatePage(employees);
            console.log(generatePage(employees));
        }
    })
};
promptUser()
    .then((userInput) => {
        console.log(userInput);
        const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.number);
        employees.push(manager);
        if (userInput.options === 'Engineer') {
            promptEngineer()
        } 
        else if (userInput.options === 'Intern') {
            promptIntern();
        } else {
            generatePage(employees);
            console.log(generatePage(employees));
        }
    });
