import React, { useCallback, useContext } from 'react'
import {FormActionsStyles} from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import { getDefaultValues } from '../../../utils/requests'
import {isEqualArrays} from '../../../utils/validations'

const FormActions = () => {
    const {state, dispatch} = useContext(Context)

    const handleClearButton = useCallback(()=>{
        let answers = {...state.formAnswer}

        for(const field in state.formAnswer){
            const typeField = state.formStructure
                .filter(block => block.componentId === field)[0].type

            const defaultValue = getDefaultValues(typeField)

            answers[field] = defaultValue
        }

        dispatch(actions.clearFormAnswers(answers))
    }, [state, dispatch, actions])

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
         */

        const requireds = getRequiredFields(state.formStructure)
        const alerts = assertRequiredFields(requireds, state.formAnswer)

        console.log(alerts)

        if(alerts.length > 0) {
            dispatch(actions.updateMultipleFormErrors(alerts))
            return false
        }

        console.log('enviar')
        return true
    }, [state])

    return (
        <FormActionsStyles>
            <button className="secondary"
                data-test="button-clear"
                onClick={handleClearButton}
            >
                Limpar
            </button>

            <button className="primary"
                data-test="button-send"
                onClick={handleApplyButton}
            >

                Enviar
            </button>
        </FormActionsStyles>
    )
}

export default FormActions