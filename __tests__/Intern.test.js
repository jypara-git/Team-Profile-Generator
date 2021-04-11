const Intern = require('../lib/Intern');
const intern = new Intern('name', 'id', 'email', 'school');

test("checks intern's name", () => {
    expect(intern.getName()).toBe('name');
});

test("checks intern's id", () => {
    expect(intern.getId()).toBe('id');
});

test("checks intern's email", () => {
    expect(intern.getEmail()).toBe('email');
});

test("checks intern's school", () => {
    expect(intern.getSchool()).toBe('school');
});

test("checks intern's role", () => {
    expect(intern.getRole()).toBe('Intern');
});