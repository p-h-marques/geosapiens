import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'

export const ButtonStyles = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${measures[1]};
    border: 2px solid;
    padding: ${measures[2]} ${measures[4]};
    font-size: ${measures[2]};
    border-color: ${colors.dark};
    color: ${colors.dark};
    background-color: transparent;
    cursor: pointer;

    &.primary{
        border-color: ${colors.dark};
        color: ${colors.light};
        background-color: ${colors.highlight};
        font-weight: bold;

        &:hover{
            background-color: ${colors.highlightHover};
        }
    }

    &.secondary{
        border-color: ${colors.danger};
        color: ${colors.danger};

        &:hover{
            background-color: ${colors.backgroundHover};
        }
    }
`
