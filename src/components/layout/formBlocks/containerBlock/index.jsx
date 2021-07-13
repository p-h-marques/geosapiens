import React from 'react'
import ReactTooltip from 'react-tooltip'
import { ContainerBlockStyles } from './styles'
import ImgRequired from '../../../../assets/images/required.svg'

const ContainerBlock = (props) => {

    console.log(props)

    return (
        <ContainerBlockStyles data-test={'form-block-' + props.type}>
            <div className="labels">
                <div className="titles">
                    <h2>{props.label}</h2>
                    <p>{props.helpBlock}</p>
                </div>

                {
                    !!props.minimum.value && (
                        <div className="required">
                            <img src={ImgRequired} alt="Atributo obrigatório!"
                                data-tip="Atributo obrigatório!"/>
                            <ReactTooltip />
                        </div>
                    )
                }
            </div>

            {props.children}
        </ContainerBlockStyles>
    )
}

export default ContainerBlock
