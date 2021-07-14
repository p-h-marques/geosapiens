import React, {useCallback, useContext, useState} from 'react'
import { TextFieldStyles } from './styles'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

const TextField = (props) => {
    const {state, dispatch} = useContext(Context)
    const [error, setError] = useState(false)

    const input = state.formAnswer[props.componentId]

    const handleInputError = useCallback(()=>{
        if(input.length === 0 && props.minimum.value === 1) setError(true)
    }, [input])

    const handleInputChange = useCallback(text =>{
        setError(false)
        dispatch(actions.updateFormAnswer(text, props.componentId))
    }, [input])

    return (
        <TextFieldStyles data-test={'form-block-' + props.type}
            className={error ? 'error' : null}>

            <input
                type="text"
                onBlur={handleInputError}
                value={input}
                onChange={e => {handleInputChange(e.target.value)}}
            />
            <span>Este campo precisa ser preenchido corretamente!</span>

        </TextFieldStyles>
    )
}

export default TextField
