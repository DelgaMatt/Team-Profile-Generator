// employee cards as array
const teamArrayCards = [];

//Manager card template
const generateManager = (manager) => {
    return `<div class="card bg-secondary m-2">
        <h3 class="card-header">${manager.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">ID: ${manager.id}</li>
            <li id="email">Email: <a href="mailto: ${manager.email}">${manager.email}</a>
            <li id="officeNumber">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`
};

//Engineer card template
const generateEngineer = (engineer) => {
    return `<div class="card bg-secondary m-2">
        <h3 class="card-header">${engineer.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">ID: ${engineer.id}</li>
            <li id="email">Email: <a href="mailto: ${engineer.email}">${enginner.email}</a>
            <li id="github">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${enginner.github}</a></li>
        </ul>
    </div>`
};

//Intern card template
const generateIntern = (intern) => {
    return `<div class="card bg-secondary m-2">
        <h3 class="card-header">${intern.name}</h3>
        <ul class="card-body list-unstyled text-center">
            <li id="id">ID: ${intern.id}</li>
            <li id="email">Email: <a href="mailto: ${intern.email}">${intern.email}</a>
            <li id="school">Education: ${intern.school}</li>
        </ul>
    </div>`
};

const generateTeamCards = (teamArray) => {
    for (let index = 0; index < teamArray.length; index++) {
        let employee = teamArray[index];

        if (employee.getRole() === "Manager") {
            let card = generateManager(employee);
            teamArrayCards.push(card);
        } else if (employee.getRole() === `Engineer`){
            let card = generateEngineer(employee);
            teamArrayCards.push(card);
        } else if (employee.getRole() === `Intern`) {
            let card = generateIntern(employee);
            teamArrayCards.push(card);
        }
    }
    //return everything the generateHTML will return
    return generateHTML();
};

//HTML page template
const generateHTML = () => {
    return `<!DOCTYPE html>
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
            ${teamArrayCards.join("\n")}
            </div>
        </main>
    </body>

    </html>`
};

module.exports = generateTeamCards;