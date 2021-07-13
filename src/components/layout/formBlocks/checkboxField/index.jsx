import React from 'react'
import { CheckboxFieldStyles } from './styles'

const CheckboxField = (props) => {
    return (
        <CheckboxFieldStyles data-test={'form-block-' + props.type}>
            {
                props.options.map((option) => (
                    <div key={option} data-test="form-check">
                        <input type="checkbox" value={option}
                            id={option}/>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            }
        </CheckboxFieldStyles>
    )
}

export default CheckboxField
