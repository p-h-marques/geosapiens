import React, {useCallback, useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip'
import { TextFieldStyles } from './styles'
import ImgRequired from '../../../../assets/images/required.svg'

const TextField = (props) => {
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    useEffect(()=>{
        console.log(props)
    }, [])

    const handleInputError = useCallback(()=>{
        if(input.length === 0) setError(true)
    }, [input])

    const handleInputChange = useCallback(text =>{
        setError(false)
        setInput(text)
    }, [input])

    return (
        <TextFieldStyles data-test={'form-block-' + props.type}>
            <div className="labels">
                <div className="titles">
                    <h2>{props.label}</h2>
                    <p>{props.helpBlock}</p>
                </div>

                {
                    !!props.minimum.value && (
                        <div className="required">
                            <img src={ImgRequired} alt="Atributo obrigatório!"
                                data-tip="Atributo obrigatório!"/>
                            <ReactTooltip />
                        </div>
                    )
                }
            </div>

            <div className={error ? 'actions error' : 'actions'}>
                <input type="text" onBlur={handleInputError}
                    value={input} onChange={e => {handleInputChange(e.target.value)}}/>
                <span>Este campo precisa ser preenchido!</span>
            </div>
        </TextFieldStyles>
    )
}

export default TextField
