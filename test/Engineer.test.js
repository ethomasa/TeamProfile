const Engineer = require('../libs/Engineer');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'test2 Eng';
            const ID = 10002;
            const email = 'test2@email.com';
            const github = 'testerGithub';
            const Obj = new Engineer('test2 Eng', 10002, 'test2@email.com', 'testerGithub');

            expect(Obj.getName()).toEqual(name);
            expect(Obj.getID()).toEqual(ID);
            expect(Obj.getEmail()).toEqual(email);
            expect(Obj.getGithub()).toEqual(github);
        });
    });
});
