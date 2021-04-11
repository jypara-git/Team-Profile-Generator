const Engineer = require('../lib/Engineer');
const engineer = new Engineer('name', 'id', 'email', 'username');

test("checks engineer's name", () => {
    expect(engineer.getName()).toBe('name');
});

test("checks engineer's id", () => {
    expect(engineer.getId()).toBe('id');
});

test("checks engineer's email", () => {
    expect(engineer.getEmail()).toBe('email');
});

test("checks engineer's username", () => {    
    expect(engineer.getGithub()).toBe('username');
});

test("checks engineer's role", () => {
    expect(engineer.getRole()).toBe('Engineer');
});
