import React from 'react'
// import ReactTooltip from 'react-tooltip'
import { CheckboxFieldStyles } from './styles'
// import ImgRequired from '../../../../assets/images/required.svg'

const CheckboxField = (props) => {
    return (
        <CheckboxFieldStyles data-test={'form-block-' + props.type}>
            <div>oi bb</div>
        </CheckboxFieldStyles>
    )
}

export default CheckboxField
