import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'

export const FooterStyles = styled.div`
    background-color: ${colors.dark};
    padding: ${measures[1]};
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        display: flex;
        gap: ${measures[1]};
        align-items: center;
        justify-content: center;
    }

    a, a:hover, a:active{
        color: ${colors.light};
    }

    a:hover{
        text-decoration: underline;
    }

    span{
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.5px;
    }
`