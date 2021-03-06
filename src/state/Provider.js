import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'

export const initialState = {
    formInfo: {},
    formStructure: [],
    formAnswer: {},
    formErrors: {},
    appStatus: {
        loading: true,
        error: false,
        send: false
    }
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