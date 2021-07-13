import React, {useContext} from 'react'
import Context from '../../state/Context'
import { FormStyles } from './styles'

import FormInfo from '../../components/layout/formInfo'
import ContainerBlock from '../../components/layout/formBlocks/containerBlock'
import TextField from '../../components/layout/formBlocks/textField'
import CheckboxField from '../../components/layout/formBlocks/checkboxField'
import RatingField from '../../components/layout/formBlocks/ratingField'

const Form = () => {
    const {state} = useContext(Context)

    function getTypeBlock(type, props) {
        const typesList = {
            textfield:      (<TextField key={props.componentId} {...props}/>),
            checkboxfield:  (<CheckboxField key={props.componentId} {...props}/>),
            ratingfield:    (<RatingField key={props.componentId} {...props}/>),
            default:        (<div key={props.componentId}>olha o padrão</div>)
        }

        return typesList[type] || typesList['default']
    }

    return (
        <FormStyles>
            <FormInfo {...state.formInfo} />
            {
                state.formStructure.map(block => {
                    return (
                        <ContainerBlock key={block.componentId} {...block}>
                            {getTypeBlock(block.type, block)}
                        </ContainerBlock>
                    )
                })
            }
        </FormStyles>
    )
}

export default Form
