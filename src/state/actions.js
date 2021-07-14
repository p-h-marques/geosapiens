import * as types from './types'

export async function updateInitialData(data){
    return {
        type: types.UPDATE_INITIAL_DATA,
        payload: { ...data}
    }
}

export function handleErrorStatus(data){
    return {
        type: types.HANDLE_ERROR_STATUS,
        payload: data,
    }
}

export function updateFormAnswer(value, type){
    return {
        type: types.UPDATE_FORM_ANSWER,
        payload: {
            value,
            type
        },
    }
}

export function clearFormAnswers(answers){
    return {
        type: types.CLEAR_FORM_ANSWERS,
        payload: answers
    }
}

export function updateFormError(field, value){
    return {
        type: types.UPDATE_FORM_ERROR,
        payload: {
            field, value
        }
    }
}

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