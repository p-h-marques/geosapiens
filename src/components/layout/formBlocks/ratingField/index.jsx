import React, { useContext } from 'react'
import { RatingFieldStyles } from './styles'
import ReactStars from 'react-rating-stars-component'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

export const feedbacks = [
    'Péssimo!',
    'Ruim!',
    'Regular!',
    'Bom!',
    'Ótimo!',
    'Excelente!'
]

const RatingField = (props) => {
    const {state, dispatch} = useContext(Context)

    return (
        <RatingFieldStyles>
            <ReactStars
                size={32}
                isHalf={false}
                value={state.formAnswer[props.componentId]}
                edit={true}
                onChange={(e)=> dispatch(actions.updateFormAnswer(e, props.componentId))}
            />

            <span className="feedback">
                {feedbacks[state.formAnswer[props.componentId]]}
            </span>
        </RatingFieldStyles>
    )
}

export default RatingField
