// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('Countries List', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('[data-testid="country-list-loading"]').as('loading')
  })

  it('list should load and loading component should disappear', () => {

    cy.get('@loading')
      .should('exist')
      .and('be.visible')

    cy.get('[data-testid="country-list"]')
      .should('not.exist')

    cy.get('[data-testid="country-list"]')
      .should('exist')
      .and('be.visible')

    cy.get('@loading')
      .should('not.exist')
  })

  it('list should has at least 1 country card element', () => {
    cy.get('[data-testid="country-card"]')
      .should('have.length.above', 0)
  })

  describe('Country Card', () => {

    it('country card should has a valid flag source', () => {

      cy.get('[data-testid="country-flag-image"]')
        .should('have.attr', 'src')
        .should('include', 'https://flagcdn.com')
    })

    it('country card informations should has value', () => {

      cy.get('[data-testid="country-information-value"]')
        .should('be.visible')
    })
  })

  describe('Filter', () => {
    describe('By Region', () => {
      beforeEach(() => {

        cy.get('[data-testid="filter-by-region"]').as('combobox')
        cy.get('@combobox').find('.base-select-list-trigger').as('combobox-trigger')
        cy.get('@combobox').find('.base-select-list').as('combobox-list')
        cy.get('@combobox-list').find('.base-select-list-item-changer').as('combobox-list-items')
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

      it('should filter countries by region', () => {
        cy.get('@combobox-list').should('not.be.visible')

        cy.get('@combobox-trigger').click()

        cy.get('@combobox-list-items')
          .any(1, true)
          .then((elem) => {
            cy.wrap(elem).click()

            let text = elem.text();

            cy.get('[data-testid*="country-region-value"]')
              .each((regionElement) => {
                cy.wrap(regionElement).should('have.text', ` ${text} `)
              })
          })
      })
    })

    describe('By Name', () => {
      beforeEach(() => {
        cy.get('[data-testid="filter-by-name"]').as('filter-by-name')
        cy.get('[data-testid="country-card"]').as('country-card-list')
      })

      it('should filter country by typed letters', () => {
        const testCharacters = 'united'

        cy.get('@filter-by-name')
          .type(testCharacters)

        cy.get('@country-card-list')
          .each((card) => {

            cy.wrap(card)
              .find('.country-name')
              .invoke('text')
              .should('match', new RegExp(testCharacters, 'i'))
          })
      })

      it('should not bring any country if search does not match', () => {
        const testCharacters = 'abcde123'

        cy.get('@filter-by-name')
          .type(testCharacters)

        cy.get('[data-testid="error-card"]')
          .should('exist')
          .and('be.visible')

        cy.get('@country-card-list')
          .should('not.exist')
      })
    })

  })

  describe('Errors', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all?**',
      }, [])
        .as('getCountries')

      cy.visit('/')
    })

    it('should render error if not countries fetched from API', () => {
      cy.wait('@getCountries')

      cy.get('[data-testid="country-list-loading"]')
        .should('not.exist')

      cy.get('[data-testid="country-list"]')
        .should('not.exist')

      cy.get('[data-testid="error-card"]').as('error')

      cy.get('@error')
        .should('exist')
        .and('be.visible')

      cy.get('@error')
        .find('[data-testid="error-title"]')
        .should('exist')
    })
  })
})