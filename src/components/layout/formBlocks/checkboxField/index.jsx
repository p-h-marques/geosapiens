import React, {useCallback, useContext} from 'react'
import { CheckboxFieldStyles } from './styles'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

const CheckboxField = (props) => {
    const {state, dispatch} = useContext(Context)

    /**
     * Manipula se opção em questão será incluída ou
     * excluída do objeto de estado global.
     */
    const handleSelectCheckbox = useCallback((option, status) => {
        const newData = [...state.formAnswer[props.componentId]]

        if(status){
            newData.push(option)

        } else {
            const index = newData.indexOf(option)
            if (index > -1) newData.splice(index, 1)
        }

        dispatch(actions.updateFormAnswer(newData, props.componentId))
        dispatch(actions.updateFormError(props.componentId, false))

    }, [state.formAnswer[props.componentId]])

    return (
        <CheckboxFieldStyles data-test={'form-block-' + props.type}>
            <div className="grid">
                {
                    props.options.map((option) => (
                        <div key={option} data-test="form-check">
                            <input
                                type="checkbox"
                                value={option}
                                id={option}
                                checked={state.formAnswer[props.componentId].includes(option)}
                                onChange={(e)=>{handleSelectCheckbox(option, e.target.checked)}}
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))
                }
            </div>

            <div className="errors">
                {
                    state.formErrors[props.componentId] &&
                    (<span>Pelo menos uma seleção deve ser feita!</span>)
                }
            </div>
        </CheckboxFieldStyles>
    )
}

export default CheckboxField
