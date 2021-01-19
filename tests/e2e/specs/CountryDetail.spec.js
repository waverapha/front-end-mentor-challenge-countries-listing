// https://docs.cypress.io/api/introduction/api.html
/// <reference types="cypress" />

describe('CountryDetail', () => {
    beforeEach(() => {
        cy.visit('/country/Palau')

        cy.get('[data-testid="country-item-loading"]').as('loading')
    })

    it('country item should load and loading component should disappear', () => {
        cy.get('@loading').should('exist').and('be.visible')

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
})