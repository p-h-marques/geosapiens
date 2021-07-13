import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'
import {Block} from '../../../styles/containers'

export const FormInfoStyles = styled(Block)`
    border-bottom: ${measures[1]} solid ${colors.dark};

    h1{
        font-size: ${measures[5]};
        padding-bottom: ${measures[2]};
        border-bottom: 1px solid ${colors.dark};
    }

    div.details{
        display: flex;
        column-gap: ${measures[5]};
        align-items: center;
        margin-top: ${measures[2]};
    }

    div.detail{
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-basis: auto;
        gap: ${measures[1]};

        img{
            height: ${measures[2]};
        }
    }

    span.active{
        color: ${colors.highlight};
    }

    span.inactive{
        color: ${colors.danger};
    }

    @media(max-width: 575px){
        div.details{
            flex-direction: column;
            align-items: flex-start;
            row-gap: ${measures[2]};
        }
    }
`