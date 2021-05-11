const Engineer = require('../lib/Engineer');

describe("Engineer Test Sequence", () => {
    it('Can set Github account via constructor', () => {
        let github = 'bobbobingtonhub';

        let engineer = new Engineer(' ', ' ', ' ', github);
        expect(engineer.github).toEqual('bobbobingtonhub');
    })
    it('getRole() should return "Engineer"', () => {

        let engineer = new Engineer();
        expect(engineer.getRole()).toEqual('Engineer');
    })
    it('Can get GitHub username via getGithub()', () => {
        let github = 'bobbobingtonhub';

        let engineer = new Engineer(' ', ' ', ' ', github);
        expect(engineer.getGithub()).toEqual('bobbobingtonhub');
    })
})