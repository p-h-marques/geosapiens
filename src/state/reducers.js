import * as types from './types'

function reducer(state, action) {
    console.log(action)

    switch (action.type) {
        case types.UPDATE_INITIAL_DATA:
            return {
                ...state,
                formInfo: {...action.payload.formInfo},
                formStructure: [...action.payload.formStructure],
                formAnswer: {...action.payload.formAnswer},
                appStatus: {
                    ...state.appStatus,
                    loading: false
                }
            }

        case types.HANDLE_ERROR_STATUS:
            return {
                ...state,
                appStatus: {
                    loading: action.payload ? false : state.appStatus.loading,
                    error: action.payload
                }
            }

        case types.UPDATE_FORM_ANSWER:
            return {
                ...state,
                formAnswer: {
                    ...state.formAnswer,
                    [action.payload.type]: action.payload.value
                }
            }

        case types.UPDATE_FORM_ERROR:
            return {
                ...state,
                formErrors: {
                    ...state.formErrors,
                    [action.payload.field]: action.payload.value
                }
            }

        case types.UPDATE_MULTIPLE_ERRORS:
            return {
                ...state,
                formErrors: {
                    ...state.formErrors,
                    ...action.payload
                }
            }

        case types.CLEAR_FORM_ANSWERS:
            return {
                ...state,
                formAnswer: {
                    ...action.payload
                }
            }

        default:
            throw new Error()
    }
}

export default reducer