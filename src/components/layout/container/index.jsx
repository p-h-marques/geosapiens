import React from 'react'
import { ContainerStyles } from './styles'

import Header from '../header'
import Footer from '../footer'

const Container = (props) => {
    return (
        <ContainerStyles>
            <Header />
            {props.children}
            <Footer />
        </ContainerStyles>
    )
}

export default Container
