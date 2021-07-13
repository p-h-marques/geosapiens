import React, {useContext, useEffect} from 'react'
import Context from '../../state/Context'
import { FormStyles } from './styles'

import ImgActive from '../../assets/images/active.svg'
import ImgInactive from '../../assets/images/inactive.svg'
import ImgTracking from '../../assets/images/tracking.svg'
import ImgPublic from '../../assets/images/public.svg'
import ImgPrivate from '../../assets/images/private.svg'

const Form = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(()=>{
        console.log(state.formInfo)
    }, [state, dispatch])

    return (
        <FormStyles>
            <section className="form-title">
                <h1 data-test="form-title-name">{state.formInfo.name}</h1>
                <div className="details">

                    <div className="detail">
                        <img src={
                            state.formInfo.status === 'enabled'
                                ? ImgActive
                                : ImgInactive
                        } alt="Status" />
                        <span className={
                            state.formInfo.status === 'enabled'
                                ? 'active'
                                : 'inactive'
                        } data-test="form-title-status">
                            {
                                state.formInfo.status === 'enabled'
                                    ? 'Formulário ativo!'
                                    : 'Formulário inativo!'
                            }
                        </span>
                    </div>

                    <div className="detail">
                        <img src={ImgTracking} alt="Rastreio de localização" />
                        <span data-test="form-title-tracking">
                            {
                                state.formInfo.answerTracking
                                    ? 'Armazenando localização'
                                    : 'Rastreio não ativado'
                            }
                        </span>
                    </div>

                    <div className="detail">
                        <img src={
                            state.formInfo.publicAnswers
                                ? ImgPublic
                                : ImgPrivate
                        } alt="Status" />
                        <span className={
                            state.formInfo.publicAnswers
                                ? 'active'
                                : 'inactive'
                        } data-test="form-title-public">
                            {
                                state.formInfo.publicAnswers
                                    ? 'Link público'
                                    : 'Link privado'
                            }
                        </span>
                    </div>
                </div>
            </section>
        </FormStyles>
    )
}

export default Form
