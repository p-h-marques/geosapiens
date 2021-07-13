import React from 'react'
import {FormActionsStyles} from './styles'

const FormActions = () => {
    return (
        <FormActionsStyles>
            <button className="secondary"
                data-test="button-clear">

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