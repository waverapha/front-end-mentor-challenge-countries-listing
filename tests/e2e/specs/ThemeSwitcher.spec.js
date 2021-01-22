// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('Theme Switcher', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('[data-testid="body"]').as('body')
    cy.get('[data-testid="theme-switcher"]').as('theme-switcher');

    cy.wrap({
      theme: () => localStorage.getItem('theme')
    })
    .as('theme')
  })

  it('should body has data-theme=light on page load', () => {

    cy.get('@theme')
    .should('exist')

    cy.get('@theme')
    .invoke('theme')
    .should('eq', 'light')

    cy.get('[data-theme="light"]')
    .should('exist')
  })

  it('should toggle theme on click', () => {

    cy.get('@theme-switcher')
    .should('exist')

    cy.wrap({
      theme: () => localStorage.getItem('theme')
    })
    .as('theme')

    cy.get('@theme')
    .invoke('theme')
    .should('eq', 'light')

    cy.get('[data-theme="light"]')
    .should('exist')

    cy.get('@theme-switcher').click()

    cy.get('@theme')
    .invoke('theme')
    .should('eq', 'dark')

    cy.get('[data-theme="dark"]')
    .should('exist')

    cy.get('@theme-switcher').click()

    cy.get('@theme')
    .invoke('theme')
    .should('eq', 'light')

    cy.get('[data-theme="light"]')
    .should('exist')
  })
})