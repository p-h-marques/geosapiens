import React from 'react'
import { ErrorStyles } from './styles'

import ImgError from '../../../assets/images/error.svg'

const Error = () => {
    return (
        <ErrorStyles>
            <img src={ImgError} alt="Carregando..." />
            <p>Parece que algo de errado ocorreu.<br />
            Por favor, tente novamente mais tarde!</p>
        </ErrorStyles>
    )
}

export default Error
