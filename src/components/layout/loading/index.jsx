import React from 'react'
import { LoadingStyles } from './styles'

import ImgLoading from '../../../assets/images/loading.svg'

const Loading = () => {
    return (
        <LoadingStyles data-test="request-loading">
            <img src={ImgLoading} alt="Carregando..." />
            <div>Carregando informações do formulário...</div>
        </LoadingStyles>
    )
}

export default Loading
