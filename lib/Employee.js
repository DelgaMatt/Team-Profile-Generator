class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        this.name;
    };

    getID(){
        this.id;
    };

    getEmail(){
        this.email;
    };

    //returns 'Employee'
    getRole(){
        return `Employee`;
    };
}

module.exports = Employee;