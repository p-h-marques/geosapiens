import React, {useCallback, useState} from 'react'
import { TextFieldStyles } from './styles'

const TextField = (props) => {
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const handleInputError = useCallback(()=>{
        if(input.length === 0) setError(true)
    }, [input])

    const handleInputChange = useCallback(text =>{
        setError(false)
        setInput(text)
    }, [input])

    return (
        <TextFieldStyles data-test={'form-block-' + props.type}
            className={error ? 'error' : null}>

            <input type="text" onBlur={handleInputError}
                value={input} onChange={e => {handleInputChange(e.target.value)}}/>
            <span>Este campo precisa ser preenchido!</span>

        </TextFieldStyles>
    )
}

export default TextField
