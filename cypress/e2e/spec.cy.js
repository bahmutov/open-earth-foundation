// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('works', () => {
  cy.visit('/actor/CA%20MTR/Montreal_emissions')
  cy.get('.contextual-widget').should('not.include.text', 'Infinity')
})
