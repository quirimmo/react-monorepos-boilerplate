const openRoute = (route: string): void => {
  cy.visit(route);
};

Cypress.Commands.add('openRoute', openRoute);

declare namespace Cypress {
  interface Chainable {
    openRoute: (route: string) => void;
  }
}
