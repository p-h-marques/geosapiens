import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'

export const SendStyles = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0px;
    background-color: ${colors.overlay};
    width: 100%;
    min-width: 360px;
    height: 100vh;
    display: ${props => (props.visible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    div {
        background-color: ${colors.light};
        border-radius: ${measures[1]};
        padding: ${measures[5]};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${measures[3]};
    }

    img {
        height: ${measures[5]};
    }

    h3 {
        font-size: ${measures[3]};
        color: ${colors.highlight};
    }

    p {
        line-height: ${measures[3]};
        text-align: center;
    }
`