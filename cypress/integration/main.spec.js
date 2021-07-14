/// <reference types="cypress" />

import locators from '../support/locators'
import { feedbacks } from '../../src/components/layout/formBlocks/ratingField'

const domain = 'http://localhost:3000'

describe('validando navegação entre páginas', ()=>{
    it('visitando domínio principal e redirecionando para adição de registro', ()=>{
        cy.visit(domain)
        cy.url().should('contain', 'insert')
    })

    it('validando quantidade, navegação e aparência dos links', ()=>{
        cy.get(locators.links.insert).should('exist')
            .should('have.class', 'active')

        cy.url().should('contain', 'insert')
    })
})

describe('exibindo informações do formulário para preenchimento', ()=>{
    beforeEach(()=>{
        cy.visit(domain)
        cy.url().should('contain', 'insert')
    })

    it('validando informações principais', ()=>{
        cy.get(locators.formInfos.title, {timeout: 1000000}).should('contain', 'Filmes Preferidos')
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

        cy.get(locators.formBlocks.ratingField).should('exist')
        cy.get(locators.formBlocks.ratingField + ' h2')
            .should('contain', 'Avaliação pessoal')

        cy.get(locators.formBlocks.ratingField + ' p')
            .should('contain', 'O que você achou do filme?')

        cy.get(locators.formBlocks.dateField).should('exist')
        cy.get(locators.formBlocks.dateField + ' h2')
            .should('contain', 'Data de lançamento')

        cy.get(locators.formBlocks.urlField).should('exist')
        cy.get(locators.formBlocks.urlField + ' h2')
            .should('contain', 'URL para o site do do IMDB com informações sobre o filme')

        cy.get(locators.formBlocks.urlField + ' p')
            .should('contain', 'https://www.imdb.com/')

        cy.get(locators.formBlocks.clearButton).should('exist').should('contain', 'Limpar')
        cy.get(locators.formBlocks.sendButton).should('exist').should('contain', 'Enviar')

        cy.get(locators.formBlocks.footer).should('exist')
            .should('contain', 'Pedro Henrique')

    })

    it.skip('testando obrigatoriedade do textfield (quando necessário)', ()=>{
        cy.get(locators.formBlocks.textField + ' input').focus().blur()
        cy.get(locators.formBlocks.textField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido corretamente!')

        cy.get(locators.formBlocks.textField + ' input').type('Meu novo filme').blur()
        cy.get(locators.formBlocks.textField + ' .error span')
            .should('not.exist')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('not.be.visible')

        cy.get(locators.formBlocks.textField + ' .required img').trigger('mouseenter')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('be.visible')

        cy.get(locators.formBlocks.textField + ' .required img').trigger('mouseleave')

        cy.get(locators.formBlocks.textField + ' [data-id=tooltip]')
            .should('not.be.visible')
    })

    it('testando funcionalidade dos checkboxes', ()=>{
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input').each($el => {
            cy.wrap($el).click()
            cy.wrap($el).click()
        })
    })

    it('testando funcionalidade da seleção de nota', ()=>{
        cy.get(locators.formBlocks.ratingFieldText)
            .should('contain', feedbacks[3])

        cy.get(locators.formBlocks.ratingField + ' div.react-stars span')
            .each(($el, key) => {
                cy.wrap($el).click()
                cy.get(locators.formBlocks.ratingFieldText)
                    .should('contain', feedbacks[key + 1])
            })
    })

    it('testando funcionalidade da seleção de data', ()=>{
        // const date = new Date().toLocaleDateString('pt-BR', localeDateOptions)

        cy.get(locators.formBlocks.dateField + ' .react-datepicker__input-container span')
        // .should('contain', date)

        cy.get(locators.formBlocks.dateField + ' .react-datepicker__input-container span').click()
        cy.get(locators.formBlocks.dateFieldPopup).should('exist')
        cy.get('body').click()
        cy.get(locators.formBlocks.dateFieldPopup).should('not.exist')
    })

    it('testando funcionalidade do campo de URL', ()=>{
        cy.get(locators.formBlocks.urlField + ' input').focus().blur()
        // cy.get(locators.formBlocks.urlField + ' .error span')
        //     .should('be.visible')
        //     .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')

        cy.get(locators.formBlocks.urlField + ' input').type('url inválida').blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')

        cy.get(locators.formBlocks.urlField + ' input').type('{selectAll}google.com').blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('not.exist')
    })

    it('testando feedbacks de carregamento', ()=>{
        cy.get(locators.feedbacks.loading).should('exist')
        cy.get(locators.formInfos.title).should('contain', 'Filmes Preferidos')
        cy.get(locators.feedbacks.loading).should('not.exist')
    })

    it('testando feedback de erro', ()=>{
        cy.intercept('https://coletum.com/api/graphql?*', {
            statusCode: 500
        }).as('request')

        cy.visit(domain)
        cy.url().should('contain', 'insert')

        cy.get(locators.feedbacks.loading).should('exist')
        cy.wait('@request')
        cy.get(locators.feedbacks.error).should('exist')
    })
})

describe('testando validações dos campos', ()=>{
    before(()=>{
        cy.visit(domain)
        cy.url().should('contain', 'insert')
    })

    it('iniciando página', ()=>{
        cy.get(locators.formInfos.title, {timeout: 1000000}).should('contain', 'Filmes Preferidos')
        cy.get(locators.formInfos.status).should('not.contain', 'inativo')
        cy.get(locators.formInfos.tracking).should('contain', 'Armazenando')
        cy.get(locators.formInfos.public).should('contain', 'público')
    })

    it('tentando submeter sem preencher nenhuma informação', ()=>{
        cy.get(locators.actions.apply).click()

        cy.get(locators.formBlocks.textField + ' > span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido corretamente!')

        cy.get(locators.formBlocks.checkboxField + ' .errors span')
            .should('be.visible')
            .should('contain', 'Pelo menos uma seleção deve ser feita!')

        cy.get(locators.formBlocks.urlField + ' > span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')
    })

    it('corrigindo o nome do filme', ()=>{
        cy.get(locators.formBlocks.textField + ' input').type('Whiplash')

        cy.get(locators.actions.apply).click()

        cy.get(locators.formBlocks.checkboxField + ' .errors span')
            .should('be.visible')
            .should('contain', 'Pelo menos uma seleção deve ser feita!')

        cy.get(locators.formBlocks.urlField + ' > span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')
    })

    it('selecionando algumas categorias', ()=>{
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Drama"]').click()
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Musical"]').click()
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Suspense"]').click()

        cy.get(locators.actions.apply).click()

        cy.get(locators.formBlocks.urlField + ' > span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')
    })

    it('inserindo urls inválidas e válidas', ()=>{
        cy.get(locators.formBlocks.urlField + ' input').type('url inválida').blur()
        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('be.visible')
            .should('contain', 'Este campo precisa ser preenchido com uma URL válida!')

        cy.get(locators.formBlocks.urlField + ' input')
            .type('{selectAll}https://www.imdb.com/title/tt2582802').blur()

        cy.get(locators.formBlocks.urlField + ' .error span')
            .should('not.exist')
    })

    it('clicando no botão limpar', ()=>{
        cy.get(locators.actions.clear).click()

        cy.get(locators.formBlocks.textField + ' input').should('have.value', '')
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input').each($el => {
            cy.wrap($el).should('not.be.checked')
        })
        cy.get(locators.formBlocks.urlField + ' input').should('have.value', '')
    })

    it('preenchendo e enviando o formulário', ()=>{
        cy.get(locators.formBlocks.textField + ' input').type('Whiplash')

        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Drama"]').click()
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Musical"]').click()
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input[value="Suspense"]').click()

        cy.get(locators.formBlocks.urlField + ' input')
            .type('{selectAll}https://www.imdb.com/title/tt2582802').blur()

        cy.get(locators.actions.apply).click()
    })

    it('verificando feedback de sucesso', ()=>{
        cy.get(locators.feedbacks.success).should('exist')
        cy.get(locators.feedbacks.success + ' h3').should('contain', 'Dados enviados!')
        cy.get(locators.feedbacks.success + ' p').should('contain', 'retornar ao formulário')
        cy.get(locators.feedbacks.successButton).should('exist').click()
    })

    it('verificando formulário vazio após o envio', ()=>{
        cy.get(locators.formBlocks.textField + ' input').should('have.value', '')
        cy.get(locators.formBlocks.checkboxField + ' [data-test=form-check] input').each($el => {
            cy.wrap($el).should('not.be.checked')
        })
        cy.get(locators.formBlocks.urlField + ' input').should('have.value', '')
    })
})