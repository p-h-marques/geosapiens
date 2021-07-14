import React, { useCallback, useContext } from 'react'
import {FormActionsStyles} from './styles'
import Button from '../button'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'
import {assertRequiredFields, getRequiredFields} from '../../../utils/manipulations'

const FormActions = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Limpa as informações do formulário
     */
    const handleClearButton = useCallback(()=>{
        dispatch(actions.clearFormAnswers(state))
    }, [state, dispatch])

    /**
     * Analisa campos obrigatórios e faz o submit do formulário
     *
     * ! Atualmente a parte de submissão está apenas com um console.log.
     *
     */
    const handleApplyButton = useCallback(()=>{
        const requireds = getRequiredFields(state.formStructure)
        const alerts = assertRequiredFields(requireds, state.formAnswer)

        if(alerts.length > 0) {
            dispatch(actions.updateMultipleFormErrors(alerts))
            return false
        }

        console.log('enviar dados aqui!')
        console.log(state.formAnswer)

        dispatch(actions.handleSendFeedback(true))

        return true
    }, [state])

    return (
        <FormActionsStyles>
            <Button
                type="secondary"
                test="button-clear"
                action={handleClearButton}
            >
                Limpar
            </Button>

            <Button
                type="primary"
                test="button-send"
                action={handleApplyButton}
            >
                Enviar
            </Button>
        </FormActionsStyles>
    )
}

export default FormActions