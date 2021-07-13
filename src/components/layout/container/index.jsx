import React, { useContext, useEffect } from 'react'
import { ContainerStyles } from './styles'

import Context from '../../../state/Context'
import Header from '../header'

const Start = (props) => {
    const { state } = useContext(Context)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <ContainerStyles>
            <Header />
            {props.children}
        </ContainerStyles>
    )
}

export default Start
