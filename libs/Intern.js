const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
}

const int = new Intern('test3 intern','10003', 'test3@email.com', 'testSchool');
console.log(int);
module.exports = Intern;
