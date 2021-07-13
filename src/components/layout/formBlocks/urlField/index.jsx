import React, { useState, useCallback } from 'react'
import { UrlFieldStyles } from './styles'

import {validURL} from '../../../../utils/validations'

const UrlField = props => {
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const handleInputError = useCallback(() => {
        if (
            (input.length === 0 && props.minimum.value === 1) ||
            (input.length !== 0 && !validURL(input))
        ){
            setError(true)
        }
    }, [input])

    const handleInputChange = useCallback(
        text => {
            setError(false)
            setInput(text)
        },
        [input],
    )

    return (
        <UrlFieldStyles
            data-test={'form-block-' + props.type}
            className={error ? 'error' : null}
        >
            <input
                type="text"
                onBlur={handleInputError}
                value={input}
                onChange={e => {
                    handleInputChange(e.target.value)
                }}
            />
            <span>Este campo precisa ser preenchido com uma URL válida!</span>
        </UrlFieldStyles>
    )
}

export default UrlField
