const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.officeNumber;
    }
}
const int = new Manager('test4 manager','10004', 'test4@email.com', '6512223333');
console.log(int);
module.exports = Manager;
