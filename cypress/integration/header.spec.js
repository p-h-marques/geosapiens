/// <reference types="cypress" />

import colors from '../../src/styles/colors'

const domain = 'http://localhost:3000'

const locators = {
    links: {
        insert: '[data-test=nav_link_0]',
        read: '[data-test=nav_link_1]',
    }
}

describe('validando navegação entre páginas', ()=>{
    it('visitando domínio principal e redirecionando para adição de registro', ()=>{
        cy.visit(domain)
        cy.url().should('contain', 'insert')
    })

    it('validando quantidade, navegação e aparência dos links', ()=>{
        cy.get(locators.links.insert).should('exist')
            .should('have.class', 'active')

        cy.get(locators.links.read).should('exist')
            .should('not.have.class', 'active')
            .click()

        cy.url().should('contain', 'read')

        cy.get(locators.links.read).should('exist')
            .should('have.class', 'active')

        cy.get(locators.links.insert).should('exist')
            .should('not.have.class', 'active')
            .click()

        cy.url().should('contain', 'insert')
    })

    /*
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    it('', ()=>{})
    */
})