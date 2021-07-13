/// <reference types="cypress" />

import locators from '../support/locators'
import { feedbacks } from '../../src/components/layout/formBlocks/ratingField'

const domain = 'http://localhost:3000'

const localeDateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC'
}

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
        cy.get(locators.formBlocks.textField + ' h2')
            .should('contain', 'Nome do filme')

        cy.get(locators.formBlocks.textField + ' p')
            .should('contain', 'Nome original do filme')

        cy.get(locators.formBlocks.checkboxField).should('exist')
        cy.get(locators.formBlocks.checkboxField + ' h2')
            .should('contain', 'Categorias')

        cy.get(locators.formBlocks.checkboxField + ' p')
            .should('contain', 'Em quais categorias o filme se encaixa')

    })

    it('testando obrigatoriedade do textfield (quando necessário)', ()=>{
        cy.get(locators.formBlocks.textField + ' input').focus().blur()
        cy.get(locators.formBlocks.textField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido corretamente!')

        cy.get(locators.formBlocks.textField + ' input').type('Meu novo filme').blur()
        cy.get(locators.formBlocks.textField + ' .error span')
            .should('not.exist')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('not.be.visible')

        /*
        cy.get(locators.formBlocks.textField + ' .required img').trigger('mouseenter')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('be.visible')

        cy.get(locators.formBlocks.textField + ' .required img').trigger('mouseleave')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('not.be.visible')
        */
    })

    it('testando funcionalidade dos checkboxes', ()=>{
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input').each($el => {
            cy.wrap($el).click()
            cy.wrap($el).click()
        })
    })

    it('testando funcionalidade da seleção de nota', ()=>{
        cy.get(locators.formBlocks.ratingFieldText)
            .should('contain', feedbacks[0])

        cy.get(locators.formBlocks.ratingField + ' div.react-stars span')
            .each(($el, key) => {
                cy.wrap($el).click()
                cy.get(locators.formBlocks.ratingFieldText)
                    .should('contain', feedbacks[key + 1])
            })
    })

    it('testando funcionalidade da seleção de data', ()=>{
        const date = new Date().toLocaleDateString('pt-BR', localeDateOptions)

        cy.get(locators.formBlocks.dateField + ' .react-datepicker__input-container span')
            .should('contain', date)

        cy.get(locators.formBlocks.dateField + ' .react-datepicker__input-container span').click()
        cy.get(locators.formBlocks.dateFieldPopup).should('exist')
        cy.get('body').click()
        cy.get(locators.formBlocks.dateFieldPopup).should('not.exist')
    })

    it('testando funcionalidade do campo de URL', ()=>{
        cy.get(locators.formBlocks.urlField + ' input').focus().blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')

        cy.get(locators.formBlocks.urlField + ' input').type('url inválida').blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')

        cy.get(locators.formBlocks.urlField + ' input').type('{selectAll}google.com').blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('not.exist')
    })
})