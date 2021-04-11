const Employee = require('../lib/Employee');
const employee = new Employee('name', 'id', 'email');

test("checks employee's name", () => {
    expect(employee.getName()).toBe('name');
});

test("checks employee's id", () => {
    expect(employee.getId()).toBe('id');
});
test("checks employee's email", () => {
    expect(employee.getEmail()).toBe('email');
});
test("checks employee's role", () => {
    expect(employee.getRole()).toBe('Employee');
});