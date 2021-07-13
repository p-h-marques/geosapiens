import React, {useEffect} from 'react'
import { TextFieldStyles } from './styles'
import ImgRequired from '../../../../assets/images/required.svg'

const TextField = (props) => {
    useEffect(()=>{
        console.log(props)
    }, [])

    return (
        <TextFieldStyles>
            <div className="labels">
                <div className="titles">
                    <h2>{props.label}</h2>
                    <p>{props.helpBlock}</p>
                </div>

                <div className="required">
                    <img src={ImgRequired} alt="Atributo obrigatório!" />
                </div>
            </div>

            <div className="actions error">
                <input type="text" />
                <span>Nome precisa ser preenchido!</span>
            </div>
        </TextFieldStyles>
    )
}

export default TextField
