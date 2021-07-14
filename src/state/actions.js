import * as types from './types'

import {getDefaultValues} from '../utils/requests'

/**
 * Salva informações básicas e de estrutura do formulário
 * em questão no objeto de estado global
 *
 * @param {object} data Objeto com informações iniciais da API
 * @returns {object}
 */
export async function updateInitialData(data){
    return {
        type: types.UPDATE_INITIAL_DATA,
        payload: { ...data}
    }
}

/**
 * Modifica estado de erro geral da página
 * no objeto de estado global.
 *
 * @param {boolean} data Status de erro da página
 * @returns {object}
 */
export function handleErrorStatus(data){
    return {
        type: types.HANDLE_ERROR_STATUS,
        payload: data,
    }
}

/**
 * Salva informações sendo inseridas no formulário
 * no estado global da aplicação
 *
 * @param {string | array} value Valor a ser salvo
 * @param {string} type ID do campo a ser salvo
 * @returns
 */
export function updateFormAnswer(value, type){
    return {
        type: types.UPDATE_FORM_ANSWER,
        payload: {
            value,
            type
        },
    }
}

/**
 * Obtém valores padrão e reseta preenchimentos do formulário
 *
 * @param {object} state Estado global anterior da aplicação
 * @returns {object}
 */
export function clearFormAnswers(state){
    let answers = {...state.formAnswer}

    for(const field in state.formAnswer){
        const typeField = state.formStructure
            .filter(block => block.componentId === field)[0].type

        const defaultValue = getDefaultValues(typeField)

        answers[field] = defaultValue
    }

    return {
        type: types.CLEAR_FORM_ANSWERS,
        payload: answers
    }
}

/**
 * Insere estados de erro dos campos no estado global da aplicação
 *
 * @param {string} field ID do campo que receberá o erro
 * @param {boolean} value Se erro está presente
 * @returns
 */
export function updateFormError(field, value){
    return {
        type: types.UPDATE_FORM_ERROR,
        payload: {
            field, value
        }
    }
}

/**
 * Atualiza a incidência de erro para múltiplos campos
 * no estado global da aplicação.
 *
 * @param {array} fields Campos a receberem o erro
 * @returns
 */
export function updateMultipleFormErrors(fields){
    const updates = fields.map(field => {
        return {[field]: true}
    })

    let mapping = {}

    updates.forEach(update => {
        mapping[Object.keys(update)[0]] = update[Object.keys(update)[0]]
    })

    return {
        type: types.UPDATE_MULTIPLE_ERRORS,
        payload: mapping
    }
}

/**
 * Exibe/oculta o feedback de envio do formulário
 *
 * @param {boolean} send Se deve ser exibido o feedback de envio do formulário
 * @returns
 */
export function handleSendFeedback(send){
    return {
        type: types.HANDLE_SEND_FEEDBACK,
        payload: send
    }
}