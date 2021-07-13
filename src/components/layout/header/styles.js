import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${measures[5]};
    background-color: ${colors.dark};

    div.logo{
        background-color: ${colors.light};
        height: 100%;
        padding: 0px ${measures[4]};
        display: flex;
    }

    nav{
        padding: 0px ${measures[2]};
        display: flex;

        a, span {
            color: ${colors.light};
            padding: 0px ${measures[2]};
            font-size: 14px;
            border-right: 1px solid ${colors.light};

            &:last-child{
                border-right: unset;
            }

            &:hover, &:active{
                color: ${colors.highlight};
                text-decoration: underline;
            }

            &.active, &.active:hover{
                color: ${colors.highlight};
                text-decoration: unset;
            }
        }
    }

    @media(max-width: 575px){
        div.logo{
            background-color: ${colors.light};
            height: 100%;
            padding: 0px ${measures[2]};
            display: flex;
        }

        nav{
            padding: 0px ${measures[1]};
            display: flex;

            a, span {
                padding: 0px ${measures[1]};
            }
        }
    }
`