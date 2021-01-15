// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('Countries List', () => {
  it('list should be visible', () => {
    cy.visit('/')
    cy.get('[data-testid="country-list"]')
    .should('be.visible')
  })

  it('list should has at least 1 country card elements', () => {
    cy.visit('/')
    cy.get('[data-testid="country-card"]')
    .should('have.length.above', 0)
  })

  describe('Country Card', () => {

    it('country card should has a valid flag source', () => {
      cy.visit('/')

      cy.get('[data-testid="country-flag-image"]')
      .should('have.attr', 'src')
      .should('include', 'https://restcountries.eu/data/');
    })
  
    it('country card informations should has value', () => {
      cy.visit('/')

      cy.get('[data-testid="country-information-value"]')
      .should('be.visible');
    })

    it('should render loading while fetching countries', () => {
      cy.visit('/');

      cy.get('[data-testid="list-loading"]');
    })
  })

  describe('Filter By Region', () => {
    beforeEach(() => {
      cy.visit('/')

      cy.get('[data-testid="filter-by-region"]').as('combobox')
      cy.get('@combobox').find('.base-select-list-trigger').as('combobox-trigger')
      cy.get('@combobox').find('.base-select-list').as('combobox-list')
    })

    it('should open a list on click', () => {
      cy.get('@combobox-list').should('not.be.visible')

      cy.get('@combobox-trigger').click()

      cy.get('@combobox-list').should('be.visible')
    })

  });
})