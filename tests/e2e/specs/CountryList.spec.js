// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('Countries List', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-testid="list-loading"]').as('loading')
  })

  it('list should load and loading component should disappear', () => {
    
    cy.get('@loading').should('exist').and('be.visible')
    cy.get('[data-testid="country-list"]').not('exist')
    
    cy.get('[data-testid="country-list"]').should('exist').and('be.visible')
    cy.get('@loading').should('not.exist')
  })

  it('list should has at least 1 country card element', () => {
    cy.get('[data-testid="country-card"]')
    .should('have.length.above', 0)
  })

  describe('Country Card', () => {

    it('country card should has a valid flag source', () => {

      cy.get('[data-testid="country-flag-image"]')
      .should('have.attr', 'src')
      .should('include', 'https://restcountries.eu/data/');
    })
  
    it('country card informations should has value', () => {

      cy.get('[data-testid="country-information-value"]')
      .should('be.visible');
    })
  })

  describe('Filter By Region', () => {
    beforeEach(() => {

      cy.get('[data-testid="filter-by-region"]').as('combobox')
      cy.get('@combobox').find('.base-select-list-trigger').as('combobox-trigger')
      cy.get('@combobox').find('.base-select-list').as('combobox-list')
      cy.get('@combobox-list').find('.base-select-list-item').as('combobox-list-items')
    })

    it('should toggle a list on click', () => {
      cy.get('@combobox-list').should('not.be.visible')

      cy.get('@combobox-trigger').click()

      cy.get('@combobox-list').should('be.visible')

      cy.get('@combobox-trigger').click()

      cy.get('@combobox-list').should('not.be.visible')
    })

    it('should close list on option select', () => {
      cy.get('@combobox-list').should('not.be.visible')

      cy.get('@combobox-trigger').click()

      cy.get('@combobox-list-items').first().click()

      cy.get('@combobox-list').should('not.be.visible')
    })

  });
})