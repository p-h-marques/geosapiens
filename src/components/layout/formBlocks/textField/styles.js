import styled from 'styled-components'
import colors from '../../../../styles/colors'
import measures from '../../../../styles/measures'

export const TextFieldStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${measures[1]};

    input{
        border: 0px;
        border-bottom: 1px solid ${colors.dark};
        background-color: transparent!important;
        width: 100%;
        font-size: ${measures[2]};
        color: ${colors.dark};
        padding: ${measures[1]};
    }

    span {
        display: none;
        font-size: ${measures[0]};
        font-style: italic;
        color: ${colors.danger};
    }

    &.error{
        input{
            border-bottom: 1px solid ${colors.danger};
            color: ${colors.danger};
        }

        span{
            display: inline;
        }
    }
`