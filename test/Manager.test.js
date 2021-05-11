const Manager = require('../lib/Manager');

describe("Manager Test Sequence", () => {
    it('Can set Office Number via constructor', () => {
        let officeNumber = '0412345678';

        let manager = new Manager(' ', ' ', ' ', officeNumber);
        expect(manager.officeNumber).toEqual('0412345678');
    })
    it('getRole() should return "Manager"', () => {

        let manager = new Manager();
        expect(manager.getRole()).toEqual('Manager');
    })
    it('Can get Office Number via getOfficeNumber()', () => {
        let officeNumber = '0412345678';

        let manager = new Manager(' ', ' ', ' ', officeNumber);
        expect(manager.getOfficeNumber()).toEqual('0412345678');
    })
})