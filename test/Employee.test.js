const Employee = require('../lib/Employee');

describe("Employee Test Sequence", () => {
    it('Can set name via constructor arguements', () => {
        let name = 'Bob';

        let employee = new Employee(name);
        expect(employee.name).toEqual('Bob');
    })
    it('Can set ID via constructor arguements', () => {
        let id = '80';

        let employee = new Employee(' ', id);
        expect(employee.id).toEqual('80');
    })
    it('Can set email via constructor arguements', () => {
        let email = 'bob@email.com';

        let employee = new Employee(' ', ' ', email);
        expect(employee.email).toEqual('bob@email.com');
    })
    it('Can get name via getName()', () => {
        let name = 'Bobington';

        let employee = new Employee(name);
        expect(employee.getName()).toEqual('Bobington');
    })
    it('Can get id via getId()', () => {
        let id = '81';

        let employee = new Employee(' ', id);
        expect(employee.getId()).toEqual('81');
    })
    it('Can get email via getEmail()', () => {
        let email = 'bobington@email.com';

        let employee = new Employee(' ', ' ', email);
        expect(employee.getEmail()).toEqual('bobington@email.com');
    })
    it('getRole() should return "Employee"', () => {
        let employee = new Employee();
        expect(employee.getRole()).toEqual('Employee');
    })
})