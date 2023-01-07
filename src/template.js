// employee cards as array
const teamArrayCards = [];

//Manager card template
const generateManager = (manager) => {
    `<div class="card bg-secondary m-2">
        <h3 class="card-header">${manager.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">${manager.id}</li>
            <li id="email">Email: <a href="mailto: ${manager.email}">${manager.email}</a>
            <li id="officeNumber">${manager.officeNumber}</li>
        </ul>
    </div>`
};

//Engineer card template
const generateEngineer = (engineer) => {
    `<div class="card bg-secondary m-2">
        <h3 class="card-header">${engineer.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">${engineer.id}</li>
            <li id="email">Email: <a href="mailto: ${engineer.email}">${enginner.email}</a>
            <li id="github">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${enginner.github}</a></li>
        </ul>
    </div>`
};

//Intern card template
const generateIntern = (intern) => {
    `<div class="card bg-secondary m-2">
        <h3 class="card-header">${intern.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">${intern.id}</li>
            <li id="email">Email: <a href="mailto: ${intern.email}">${intern.email}</a>
            <li id="school">${intern.school}</li>
        </ul>
    </div>`
};

const generateTeamCards = () => {

};

//HTML page template
const generateHTML = () => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <title>Document</title>
    </head>

    <body class="bg-light">
        <header class="bg-secondary">
        <h1 class="text-bold text-white text-center py-4">TEAM PROFILE</h1>
        </header>

        <!-- container for class cards -->
        <main class="d-flex container justify-content-center border border-primary ">
            <div class="row">
            ${teamArrayCards}
            </div>
        </main>
    </body>

    </html>`
};