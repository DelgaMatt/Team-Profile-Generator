const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github){
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        this.github;
    };
    
    //overridden to return 'Engineer'
    getRole(){
        return `Engineer`;
    };
}

module.exports = Engineer;