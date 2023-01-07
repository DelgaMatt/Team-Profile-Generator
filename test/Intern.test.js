const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create a new intern with the name, ID, and email if provided valid arguments", () => {
            const intern = new Intern("Alex", 3333, "alex@test.com");

            expect(intern.name).toEqual("Alex");
            expect(intern.id).toEqual(3333);
            expect(intern.email).toEqual("alex@test.com");
        })
    });

    describe("getSchool", () => {
        it("should return the Intern's school", () => {
            const intern = new Intern("James", 444, "james@test.com", "University of Oregon");
            
            expect(intern.school).toEqual("University of Oregon");
        })
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const intern = new Intern("Matt", 4747, "matt@test.com");

            expect(intern.getRole()).toEqual("Intern");
        })
    });
});