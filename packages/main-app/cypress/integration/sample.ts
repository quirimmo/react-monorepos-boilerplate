describe('Add User Not Mocked', () => {
  before(() => {
    cy.openRoute('/');
  });

  it('should load the Add User', () => {
    cy.url().should('deep.equal', 'http://localhost:3000/add-user');
  });

  it('should add a user', () => {});
});
