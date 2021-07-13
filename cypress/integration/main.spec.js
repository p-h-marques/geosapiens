/// <reference types="cypress" />

import locators from '../support/locators'
const domain = 'http://localhost:3000'

describe('exibindo informações do formulário para preenchimento', ()=>{
    it('visitando página', ()=>{
        cy.visit(domain)
        cy.url().should('contain', 'insert')
    })

    it('validando informações principais', ()=>{
        cy.get(locators.formInfos.title).should('contain', 'Filmes Preferidos')
        cy.get(locators.formInfos.status).should('not.contain', 'inativo')
        cy.get(locators.formInfos.tracking).should('contain', 'Armazenando')
        cy.get(locators.formInfos.public).should('contain', 'público')
    })

    it('validando cards corretos a serem exibidos', ()=>{
        cy.get(locators.formBlocks.textField).should('exist')
        cy.get(locators.formBlocks.textField).get('h2')
            .should('contain', 'Nome do filme')

        cy.get(locators.formBlocks.textField).get('p')
            .should('contain', 'Nome original do filme')

    })

    it('testando obrigatoriedade do textfield (quando necessário)', ()=>{
        cy.get(locators.formBlocks.textField).get('input').focus().blur()
        cy.get(locators.formBlocks.textField).get('.error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido!')

        cy.get(locators.formBlocks.textField).get('input').type('Meu novo filme').blur()
        cy.get(locators.formBlocks.textField).get('.error span')
            .should('not.exist')

        cy.get(locators.formBlocks.textField).get('[data-id=tooltip]')
            .should('not.be.visible')

        cy.get(locators.formBlocks.textField).get('.required img').trigger('mouseenter')

        cy.get(locators.formBlocks.textField).get('[data-id=tooltip]')
            .should('be.visible')

        cy.get(locators.formBlocks.textField).get('.required img').trigger('mouseleave')

        cy.get(locators.formBlocks.textField).get('[data-id=tooltip]')
            .should('not.be.visible')


    })
})