import React, {useCallback, useContext} from 'react'
import { TextFieldStyles } from './styles'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

const TextField = (props) => {
    const {state, dispatch} = useContext(Context)

    /**
     * Analisa se campo está preenchido caso obrigatório,
     * no momento de blur do campo, e veicula
     * os feedbacks apropriados.
     */
    const handleInputError = useCallback(()=>{
        if(state.formAnswer[props.componentId].length === 0 && props.minimum.value === 1){
            dispatch(actions.updateFormError(props.componentId, true))
        }
    }, [state.formAnswer[props.componentId]])

    /**
     * Remove possíveis mensagens de erro e atualiza
     * estado global conforme digitação acontece
     */
    const handleInputChange = useCallback(text =>{
        dispatch(actions.updateFormError(props.componentId, false))
        dispatch(actions.updateFormAnswer(text, props.componentId))
    }, [state.formAnswer[props.componentId]])

    return (
        <TextFieldStyles data-test={'form-block-' + props.type}
            className={state.formErrors[props.componentId] ? 'error' : null}>

            <input
                type="text"
                onBlur={handleInputError}
                value={state.formAnswer[props.componentId]}
                onChange={e => {handleInputChange(e.target.value)}}
            />
            <span>Este campo precisa ser preenchido corretamente!</span>

        </TextFieldStyles>
    )
}

export default TextField
