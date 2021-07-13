import styled from 'styled-components'
import measures from '../../../styles/measures'
import colors from '../../../styles/colors'

export const FormActionsStyles = styled.section`
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${measures[2]};

    button{
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
    }

    @media(max-width: 991px){
        width: 100%;
        margin: 0px ${measures[5]};
    }

    @media(max-width: 575px){
        margin: 0px ${measures[2]};
    }
`