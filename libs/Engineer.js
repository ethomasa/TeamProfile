const Employee = require('./Employee');

class Engineer extends Employee {
    //extending and setting up new properties
    constructor(name, ID, email, github) {
        super(name, ID, email)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
const eng = new Engineer('test2 Eng','10002', 'test2@email.com', 'testerGithub');
console.log(eng);

module.exports = Engineer;
