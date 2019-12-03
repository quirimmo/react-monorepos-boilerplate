import { Given } from 'cypress-cucumber-preprocessor/steps';

describe('Add User Not Mocked', () => {
  before(() => {
    cy.openRoute('/');
  });

  it('should load the Add User', () => {
    cy.url().should('deep.equal', 'http://localhost:3000/add-user');
  });

  it('should add a user', () => {});
});

// this will get called before each scenario
// Before(() => {
//   beforeCounter += 1;
//   beforeWithTagCounter = 0;
// });

// // this will only get called before scenarios tagged with @foo
// Before({ tags: '@foo' }, () => {
//   beforeWithTagCounter += 1;
// });

Given('My Step Definition', () => {
  // ...test code here
});
