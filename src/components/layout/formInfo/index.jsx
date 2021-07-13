import React from 'react'
import { FormInfoStyles } from './styles'

import ImgActive from '../../../assets/images/active.svg'
import ImgInactive from '../../../assets/images/inactive.svg'
import ImgTracking from '../../../assets/images/tracking.svg'
import ImgPublic from '../../../assets/images/public.svg'
import ImgPrivate from '../../../assets/images/private.svg'

const FormInfo = (props) => {
    return (
        <FormInfoStyles>
            <h1 data-test="form-title-name">{props.name}</h1>
            <div className="details">

                <div className="detail">
                    <img src={
                        props.status === 'enabled'
                            ? ImgActive
                            : ImgInactive
                    } alt="Status" />
                    <span className={
                        props.status === 'enabled'
                            ? 'active'
                            : 'inactive'
                    } data-test="form-title-status">
                        {
                            props.status === 'enabled'
                                ? 'Formulário ativo!'
                                : 'Formulário inativo!'
                        }
                    </span>
                </div>

                <div className="detail">
                    <img src={ImgTracking} alt="Rastreio de localização" />
                    <span data-test="form-title-tracking">
                        {
                            props.answerTracking
                                ? 'Armazenando localização'
                                : 'Rastreio não ativado'
                        }
                    </span>
                </div>

                <div className="detail">
                    <img src={
                        props.publicAnswers
                            ? ImgPublic
                            : ImgPrivate
                    } alt="Status" />
                    <span className={
                        props.publicAnswers
                            ? 'active'
                            : 'inactive'
                    } data-test="form-title-public">
                        {
                            props.publicAnswers
                                ? 'Link público'
                                : 'Link privado'
                        }
                    </span>
                </div>
            </div>
        </FormInfoStyles>
    )
}

export default FormInfo
