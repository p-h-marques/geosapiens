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
import Loading from '../../components/layout/loading'
import Error from '../../components/layout/error'
import Send from '../../components/layout/send'

const Form = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Obtém o componente de formulário de acordo com o tipo de campo passado.
     *
     * @param {string} type Tipo de campo
     * @param {object} props Propriedades a serem passadas ao componente retornado
     * @returns {Component} Componente correspondente ao tipo de campo passado.
     */
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

    /**
     * Faz a requisição inicial da página, com a estrutura do formulário.
     */
    useEffect(async ()=>{
        const initialData = await getInitialData()

        if(initialData){
            dispatch(await actions.updateInitialData(initialData))
        } else {
            dispatch(actions.handleErrorStatus(true))
        }
    }, [])

    return (
        <FormStyles>
            {state.appStatus.loading && (<Loading />)}

            {state.appStatus.error && (<Error />)}

            {state.appStatus.send && (<Send />)}

            {
                !state.appStatus.loading &&
                !state.appStatus.error &&
                (<FormInfo {...state.formInfo} />)
            }

            {
                state.formStructure.map(block => {
                    if(
                        !state.appStatus.loading &&
                        !state.appStatus.error
                    ){
                        return (
                            <ContainerBlock key={block.componentId} {...block}>
                                {getTypeBlock(block.type, block)}
                            </ContainerBlock>
                        )
                    }
                })
            }

            {
                !state.appStatus.loading &&
                !state.appStatus.error &&
                (<FormActions />)
            }
        </FormStyles>
    )
}

export default Form
