import React from 'react'
import {FormActionsStyles} from './styles'

const FormActions = () => {
    return (
        <FormActionsStyles>
            <button className="secondary">
                Limpar
            </button>
            <button className="primary">
                Enviar
            </button>
        </FormActionsStyles>
    )
}

export default FormActions