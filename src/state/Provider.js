import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'


export const initialState = {
    formInfo: {
        id: '23458',
        name: 'Filmes Preferidos',
        status: 'enabled',
        category: 'Desafio Front End',
        answerTracking: true,
        publicAnswers: true
    },
    formStructure: [
        {
            label: 'Nome do filme',
            componentId: 'nomeDoFilme302645',
            type: 'textfield',
            helpBlock: 'Nome original do filme.',
            order: '0',
            options: null,
            minimum: {
                type: 'FIXED',
                value: 0
            },
            maximum: 1,
            widget: null,
            components: null
        },
        {
            label: 'Categorias',
            componentId: 'categorias302641',
            type: 'checkboxfield',
            helpBlock: 'Em quais categorias o filme se encaixa',
            order: '1',
            options: [
                'Ação',
                'Animação',
                'Aventura',
                'Comédia',
                'Comédia romântica',
                'Documentário',
                'Drama',
                'Espionagem',
                'Fantasia',
                'Faroeste',
                'Ficção científica',
                'Guerra',
                'Musical',
                'Policial',
                'Romance',
                'Suspense',
                'Terror',
                'Outros'
            ],
            minimum: {
                type: 'FIXED',
                value: 0
            },
            maximum: null,
            widget: 'select',
            components: null
        },
        {
            label: 'Avaliação pessoal',
            componentId: 'avaliacaoPessoal302642',
            type: 'ratingfield',
            helpBlock: 'O que você achou do filme?',
            order: '2',
            options: null,
            minimum: {
                type: 'FIXED',
                value: 0
            },
            maximum: 1,
            widget: null,
            components: null
        },
        {
            label: 'Data de lançamento',
            componentId: 'dataDeLancamento302643',
            type: 'datefield',
            helpBlock: null,
            order: '3',
            options: null,
            minimum: {
                type: 'FIXED',
                value: 0
            },
            maximum: 1,
            widget: null,
            components: null
        },
        {
            label: 'URL para o site do do IMDB com informações sobre o filme',
            componentId: 'urlParaOSiteDoDoImdbComInformacoesSobreOFilme302644',
            type: 'urlfield',
            helpBlock: 'https://www.imdb.com/',
            order: '4',
            options: null,
            minimum: {
                type: 'FIXED',
                value: 0
            },
            maximum: 1,
            widget: null,
            components: null
        }
    ]
}


function Provider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider