import React, { useState } from 'react'
import { RatingFieldStyles } from './styles'
import ReactStars from 'react-rating-stars-component'

export const feedbacks = [
    'Péssimo!',
    'Ruim!',
    'Regular!',
    'Bom!',
    'Ótimo!',
    'Excelente!'
]

const RatingField = () => {
    const [rating, setRating] = useState(0)

    return (
        <RatingFieldStyles>
            <ReactStars
                size={32}
                isHalf={false}
                value={rating}
                edit={true}
                onChange={setRating}
            />

            <span className="feedback">
                {feedbacks[rating]}
            </span>
        </RatingFieldStyles>
    )
}

export default RatingField
