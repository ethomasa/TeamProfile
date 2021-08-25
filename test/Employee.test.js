const Employee = require('../libs/Employee');


describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'test1 emp';
            const ID = 10001;
            const email = 'test1@email.com';

            const empObj = new Employee('test1 emp', 10001, 'test1@email.com');

            expect(empObj.getName()).toEqual(name);
            expect(empObj.getID()).toEqual(ID);
            expect(empObj.getEmail()).toEqual(email);
        });
    });
});

        
        
    


