const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a new manager with the name, ID, and email if provided valid arguments", () => {
            const manager = new Manager("Chad", 99, "chad@test.com");

            expect(manager.name).toEqual("Chad");
            expect(manager.id).toEqual(99);
            expect(manager.email).toEqual("chad@test.com");
        })
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const manager = new Manager("Ziggy", 888, "zigzag@test.com");

            expect(manager.getRole()).toEqual("Manager");
        })
    });
});