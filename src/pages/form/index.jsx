import React, {useContext} from 'react'
import Context from '../../state/Context'
import { FormStyles } from './styles'

import FormInfo from '../../components/layout/formInfo'
import TextField from '../../components/layout/formBlocks/textField'

const Form = () => {
    const {state} = useContext(Context)

    function getTypeBlock(type, props) {
        const typesList = {
            textfield: (<TextField key={props.componentId} {...props} />),
            default: (<div key={props.componentId}>olha o padrão</div>)
        }

        return typesList[type] || typesList['default']
    }


    return (
        <FormStyles>
            <FormInfo {...state.formInfo} />
            {
                state.formStructure.map(block => {
                    return getTypeBlock(block.type, block)
                })
            }
        </FormStyles>
    )
}

export default Form
