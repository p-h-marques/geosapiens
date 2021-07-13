import * as types from './types'

/**
 * Action para update simples
 *
 * @param {boolean} data
 * @returns
 */
export function simpleUpdate(data){
    return {
        type: types.SIMPLE_UPDATE,
        payload: data,
    }
}

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