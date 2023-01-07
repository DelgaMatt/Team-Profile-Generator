const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create a new engineer with the name, ID, and email if provided valid arguments", () => {
            const engineer = new Engineer("Jacob", 2222, "test@test.com");

            expect(engineer.name).toEqual("Jacob");
            expect(engineer.id).toEqual(2222);
            expect(engineer.email).toEqual("test@test.com");
        })
    });

    describe("getGithub", () => {
       it("should return the engineer's github", () => {
            const engineer = new Engineer("Zack", 1111, "test@test.com", "goGitZack");

            expect(engineer.github).toEqual("goGitZack");
       })
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const engineer = new Engineer("Jacob", 2222, "test@test.com");

            expect(engineer.getRole()).toEqual("Engineer");
        })
    });
});