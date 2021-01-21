// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('CountryDetail', () => {
    beforeEach(() => {
        const country = 'Brazil'

        cy.visit(`/country/${country}`)

        cy.get('[data-testid="country-item-loading"]').as('loading')
    })

    it('should load country item and loading component should disappear', () => {
        cy.get('@loading')
        .should('exist')
        .and('be.visible')

        cy.get('[data-testid="country-item"]').as('country-item')
        .should('exist')
        .and('be.visible')

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

    describe('Errors', () => {
        beforeEach(() => {
            cy.visit('/country/Brazila')
    
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