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