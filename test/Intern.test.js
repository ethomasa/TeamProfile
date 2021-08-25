const Intern = require('../libs/Intern');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'test3 intern';
            const ID = 10003;
            const email = 'test3@email.com';
            const school = 'testSchool'

            const Obj = new Intern('test3 intern',10003, 'test3@email.com', 'testSchool');

            expect(Obj.getName()).toEqual(name);
            expect(Obj.getID()).toEqual(ID);
            expect(Obj.getEmail()).toEqual(email);
            expect(Obj.getSchool()).toEqual(school);
        });
    });
});
