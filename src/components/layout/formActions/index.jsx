import React, { useCallback, useContext } from 'react'
import {FormActionsStyles} from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import { getDefaultValues } from '../../../utils/requests'

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

    return (
        <FormActionsStyles>
            <button className="secondary"
                data-test="button-clear"
                onClick={handleClearButton}
            >
                Limpar
            </button>

            <button className="primary"
                data-test="button-send">

                Enviar
            </button>
        </FormActionsStyles>
    )
}

export default FormActions