class Employee {
    constructor(name, ID, email) {
        // set up properties
        this.name = name;
        this.email = email;
        this.ID = ID;
    }
    getRole() {
        return "Employee"
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getID() {
        return this.ID;
    }
   
}

const emp = new Employee('test1 Emp', 'test1@email.com', '10001');
console.log(emp);
module.exports = Employee;
