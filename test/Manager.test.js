const Manager = require('../libs/Manager');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'test4 manager';
            const ID = 10004;
            const email = 'test4@email.com';
            const officeNumber = 6512223333;

            const Obj = new Manager('test4 manager', 10004, 'test4@email.com', 6512223333);

            expect(Obj.getName()).toEqual(name);
            expect(Obj.getID()).toEqual(ID);
            expect(Obj.getEmail()).toEqual(email);
            expect(Obj.getOffice()).toEqual(officeNumber);
        });
    });
});