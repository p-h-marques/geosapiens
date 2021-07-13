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
    })

    it('testando obrigatoriedade do textfield', ()=>{
    })
})