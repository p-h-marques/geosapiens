import * as types from './types'

function reducer(state, action) {
    switch (action.type) {
        case types.SIMPLE_UPDATE:
            return {
                ...state
            }

        case types.UPDATE_INITIAL_DATA:
            return {
                ...state,
                formInfo: {...action.payload.formInfo},
                formStructure: [...action.payload.formStructure],
                appStatus: {
                    ...state.appStatus,
                    loading: false
                }
            }

        default:
            throw new Error()
    }
}

export default reducer