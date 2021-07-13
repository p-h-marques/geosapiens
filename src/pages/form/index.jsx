import React, {useContext, useEffect} from 'react'
import Context from '../../state/Context'
import { FormStyles } from './styles'

import FormInfo from '../../components/layout/formInfo'

const Form = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(()=>{
        console.log(state.formStructure)
    }, [state, dispatch])

    function getTypeBlock(type, props) {
        const typesList = {
            textfield: (<div key={props.componentId}>olha o texto</div>),
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
