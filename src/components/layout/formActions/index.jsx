import React, { useCallback, useContext } from 'react'
import {FormActionsStyles} from './styles'
import Button from '../button'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import { getDefaultValues } from '../../../utils/requests'
import {isEqualArrays} from '../../../utils/validations'

const FormActions = () => {
    const {state, dispatch} = useContext(Context)

    const handleClearButton = useCallback(()=>{
        dispatch(actions.clearFormAnswers(state))
    }, [state, dispatch])

    const handleApplyButton = useCallback(()=>{
        function getRequiredFields(structure){
            return structure.filter(field => {
                return field.minimum.value === 0 && !['ratingfield', 'datefield'].includes(field.type)
            })
        }

        function assertRequiredFields(requireds, answers){
            let alerts = []

            requireds.forEach(required => {
                const defaultValue = getDefaultValues(required.type)

                if(
                    defaultValue === answers[required.componentId] ||
                    isEqualArrays(defaultValue, answers[required.componentId])
                ){
                    alerts.push(required.componentId)
                }
            })

            return alerts
        }

        /**
         * - verificar campos obrigatórios
         * - - ser tiver campos obrigatórios, lançar erros no objeto global
         * - criar objeto para salvar
         * - exibir alerta
         * - - parâmetro do objeto global com status de envio
         * - - mudar ele pra true, e dar um console log na resposta
         * - - ao clicar em preencher de novo, limpar campos e fechar alerta
         */

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