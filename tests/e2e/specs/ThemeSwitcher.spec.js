// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('Theme Switcher', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('[data-testid="body"]').as('body')
    cy.get('[data-testid="theme-switcher"]').as('theme-switcher');
  })

  it('should body has data-theme=light on page load', () => {
    cy.get('@body').should('have.data', 'theme', 'light')
  })

  it('should toggle theme on click', () => {
    cy.get('@body').should('have.data', 'theme', 'light')

    cy.get('@theme-switcher').click({force: true})

    cy.get('[data-theme="dark"]').should('exist')

    cy.get('@theme-switcher').click({force: true})

    cy.get('[data-theme="light"]').should('exist')
  })
})