import React, {useContext, useEffect} from 'react'
import Context from '../../state/Context'
import * as actions from '../../state/actions'
import {getInitialData} from '../../utils/requests'
import { FormStyles } from './styles'

import FormInfo from '../../components/layout/formInfo'
import FormActions from '../../components/layout/formActions'
import ContainerBlock from '../../components/layout/formBlocks/containerBlock'
import TextField from '../../components/layout/formBlocks/textField'
import CheckboxField from '../../components/layout/formBlocks/checkboxField'
import RatingField from '../../components/layout/formBlocks/ratingField'
import DateField from '../../components/layout/formBlocks/dateField'
import UrlField from '../../components/layout/formBlocks/urlField'

const Form = () => {
    const {state, dispatch} = useContext(Context)

    function getTypeBlock(type, props) {
        const typesList = {
            textfield:      (<TextField key={props.componentId} {...props}/>),
            checkboxfield:  (<CheckboxField key={props.componentId} {...props}/>),
            ratingfield:    (<RatingField key={props.componentId} {...props}/>),
            datefield:      (<DateField key={props.componentId} {...props}/>),
            urlfield:       (<UrlField key={props.componentId} {...props}/>),
            default:        (<div key={props.componentId}>olha o padrão</div>)
        }

        return typesList[type] || typesList['default']
    }

    useEffect(async ()=>{
        const initialData = await getInitialData()
        dispatch(await actions.updateInitialData(initialData))
    }, [])

    return (
        <FormStyles>
            {state.appStatus.loading && (<div>Carregando...</div>)}

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

            <FormActions />
        </FormStyles>
    )
}

export default Form
