const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return a new employee's name", () => {
            const employee = new Employee("Sarah");

            expect(employee.name).toEqual("Sarah");
        })
    });

    describe("getID", () => {
        it("should return a new employee's ID", () => {
            const employee = new Employee("Sarah", 530);

            expect(employee.id).toEqual(530);
        })
    });

    describe("getEmail", () => {
        it("should create a new employee's email", () => {
            const employee = new Employee("Sarah", 320, "sarah@test.com");

            expect(employee.email).toEqual("sarah@test.com");
        })
    });

    describe("getRole", () => {
        it("should return a new employee's role", () => {
            const employee = new Employee("Sarah", 320, "sarah@test.com");

            expect(employee.getRole()).toEqual("Employee");
        })
    })
});