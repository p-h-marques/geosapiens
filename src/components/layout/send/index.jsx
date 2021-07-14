import React, { useContext, useCallback } from 'react'
import { SendStyles } from './styles'
import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import ImgStar from '../../../assets/images/highlightstar.svg'
import Button from '../button'

const Send = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Limpa objeto global relativo ao preenchimento do formulário
     * e retorna ao formulário vazio.
     */
    const handleReturnButton = useCallback(()=>{
        dispatch(actions.clearFormAnswers(state))
        dispatch(actions.handleSendFeedback(false))
    }, [state, dispatch])

    return (
        <SendStyles
            visible={state.appStatus.send}
            data-test="request-sending">
            <div>
                <img src={ImgStar} alt="Enviado!" />
                <h3>Dados enviados!</h3>
                <p>Para retornar ao formulário, <br />clique no botão abaixo:</p>
                <Button
                    type="primary"
                    test="button-return"
                    action={handleReturnButton}
                >
                    Retornar
                </Button>
            </div>
        </SendStyles>
    )
}

export default Send
