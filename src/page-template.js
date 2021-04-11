const Engineer = require("../lib/Engineer");

const generateEngineer = templateData => {
    const engineers = [];
   for (var i = 1; i < templateData.length; i++) {
       const engineer = templateData[i];
        if (engineer.getRole() === 'Engineer') {
            engineers.push(`
            <div class="card column col-sm-12 mb-3">
                    <div class="card-header text-white bg-primary">
                      <h2 class="card-title">${engineer.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-glasses"></i> ${engineer.getRole()} </h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank" >${engineer.getGithub()}</a></li>
                          </ul>
                    </div>
            </div>
            `)
        }
   }  
   return engineers.join('');
};

const generateIntern = templateData => {
   const interns = [];
   for (var i =  1; i < templateData.length; i++) {
       const intern = templateData[i];
       if (intern.getRole() === 'Intern') {
           interns.push(`
           <div class="card column col-sm-12 mb-3">
                   <div class="card-header text-white bg-primary">
                       <h2 class="card-title">${intern.getName()}</h2>
                       <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
                   </div>
                   <div class="card-body">
                       <ul class="list-group">
                           <li class="list-group-item">ID: ${intern.getId()}</li>
                           <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                           <li class="list-group-item">School: ${intern.getSchool()}</li>
                         </ul>
                   </div>
                 </div>
           `)
       }
   }
   return interns.join('');
}; 

const generatePage = (templateData) => {
    const manager = templateData[0];
        return  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            <header class="container-sm jumbotron">
                <h1 class="page-title">My Team</h1>
            </header>
            <main class="container">
                <div class="card column col-sm-12 mb-3"> 
                    <div class="card-header text-white bg-primary">
                      <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number:${manager.getNumber()}</li>
                          </ul>
                    </div>
                </div>    
                ${generateEngineer(templateData)}
                ${generateIntern(templateData)}
            </main>
        </body>
        </html>
        `;
};
module.exports = { generatePage };