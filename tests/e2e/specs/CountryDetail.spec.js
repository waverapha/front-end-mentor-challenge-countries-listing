// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('CountryDetail', () => {
    beforeEach(() => {
        const country = 'Germany'

        cy.visit(`/country/${country}`)

        cy.get('[data-testid="country-item-loading"]').as('loading')

        cy.get('@loading')
        .should('exist')
        .and('be.visible')

        cy.get('[data-testid="country-item"]')
        .as('country-item')
        .should('exist')
        .and('be.visible')

        cy.get('@loading')
        .should('not.exist')
    })

    it('should load country item and loading component should disappear', () => {

        cy.get('@country-item')
        .get('[data-testid="country-population"]')
        .invoke('text')
        .should(($text) => {
            $text = parseInt($text.replaceAll(',', ''));

            expect($text).to.be.gte(0);
        });

        cy.get('@country-item')
        .get('[data-testid="country-region"]')
        .invoke('text')
        .should('have.length.greaterThan', 0);

        cy.get('@country-item')
        .get('[data-testid="country-subregion"]')
        .invoke('text')
        .should('have.length.greaterThan', 0);

        cy.get('@country-item')
        .get('[data-testid="country-capital"]')
        .invoke('text')
        .should('have.length.greaterThan', 0);

        cy.get('@loading').should('not.exist')
    });

    it('navigate to another country when tag is clicked', () => {

        cy.get('[data-testid="country-border-tag"]')
        .any()
        .as('country-border-tag')
        .click()

        cy.get('@country-border-tag')
        .then(element => {
            cy.url().should('include', encodeURI(element.innerText))
        })

    });

    describe('Errors', () => {
        beforeEach(() => {
            const country = 'Brazila'

            cy.visit(`/country/${country}`)
    
            cy.get('[data-testid="country-item-loading"]').as('loading')
        })

        it('should not load if param is not a valid country', () => {
            cy.get('@loading')
            .should('exist')
            .and('be.visible')

            cy.get('[data-testid="error-card"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text', '404')
            .and('contain.text', 'Invalid country name')
    
            cy.get('[data-testid="country-card"]')
            .should('not.exist')
    
            cy.get('@loading')
            .should('not.exist')
        });
    })
})