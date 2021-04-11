const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const manager = new Manager('name', 'id', 'email', 'number');

test("checks manager's name", () => {
    expect(manager.getName()).toBe('name');
});

test("checks manager's id", () => {
    expect(manager.getId()).toBe('id');
});

test("checks manager's email", () => {
    expect(manager.getEmail()).toBe('email');
});

test("checks manager's office number", () => {
    expect(manager.getNumber()).toBe('number');
});

test("checks manager's role", () => {
    expect(manager.getRole()).toBe('Manager');
});

