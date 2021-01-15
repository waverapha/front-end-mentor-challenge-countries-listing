// https://docs.cypress.io/api/introduction/api.html

describe('Countries List', () => {
  it('listing should be visible', () => {
    cy.visit('/')
    cy.get('.country-listing-page')
    .should('be.visible')
  })

  it('listing should has at least 1 country card element', () => {
    cy.visit('/')
    cy.get('.country-listing-page')
    .find('.country-card')
  })
})