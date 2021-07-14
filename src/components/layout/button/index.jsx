import React from 'react'
import {ButtonStyles} from './styles'

const Button = (props) => {
    return (
        <ButtonStyles
            className={props.type}
            data-test={props.test}
            onClick={props.action}
        >
            {props.children}
        </ButtonStyles>
    )
}

export default Button