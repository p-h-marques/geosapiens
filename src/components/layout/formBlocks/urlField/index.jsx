import React, { useState, useCallback, useContext } from 'react'
import { UrlFieldStyles } from './styles'

import {validURL} from '../../../../utils/validations'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

const UrlField = props => {
    const [error, setError] = useState(false)

    const {state, dispatch} = useContext(Context)

    const handleInputError = useCallback(() => {
        if ((
            state.formAnswer[props.componentId].length === 0 &&
            props.minimum.value === 1
        ) || (
            state.formAnswer[props.componentId].length !== 0 &&
            !validURL(state.formAnswer[props.componentId])
        )){
            setError(true)
        }

    }, [state.formAnswer[props.componentId]])

    const handleInputChange = useCallback(
        text => {
            setError(false)
            dispatch(actions.updateFormAnswer(text, props.componentId))
        },
        [state.formAnswer[props.componentId]],
    )

    return (
        <UrlFieldStyles
            data-test={'form-block-' + props.type}
            className={error ? 'error' : null}
        >
            <input
                type="text"
                onBlur={handleInputError}
                value={state.formAnswer[props.componentId].trim()}
                onChange={e => {
                    handleInputChange(e.target.value)
                }}
            />
            <span>Este campo precisa ser preenchido com uma URL válida!</span>
        </UrlFieldStyles>
    )
}

export default UrlField
