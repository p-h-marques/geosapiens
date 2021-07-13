import styled from 'styled-components'
import colors from '../../../styles/colors'
import measures from '../../../styles/measures'

export const ErrorStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${measures[2]};

    img {
        height: ${measures[5]};
    }

    p{
        line-height: ${measures[3]};
        text-align: center;
        color: ${colors.danger};
    }
`