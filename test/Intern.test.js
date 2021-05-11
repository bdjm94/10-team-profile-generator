const Intern = require('../lib/Intern');

describe("Intern Test Sequence", () => {
    it('Can set School via constructor', () => {
        let school = 'USYD';

        let intern = new Intern(' ', ' ', ' ', school);
        expect(intern.school).toEqual('USYD');
    })
    it('getRole() should return "Intern"', () => {

        let intern = new Intern();
        expect(intern.getRole()).toEqual('Intern');
    })
    it('Can get School getSchool()', () => {
        let school = 'USYD';

        let intern = new Intern(' ', ' ', ' ', school);
        expect(intern.getSchool()).toEqual('USYD');
    })
})