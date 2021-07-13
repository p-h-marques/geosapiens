import React from 'react'
import { ContainerStyles } from './styles'

import Header from '../header'

const Container = (props) => {
    return (
        <ContainerStyles>
            <Header />
            {props.children}
            <footer>footer</footer>
        </ContainerStyles>
    )
}

export default Container
