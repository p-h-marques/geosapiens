import styled from 'styled-components'
import measures from '../../../styles/measures'

export const LoadingStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${measures[2]};

    img {
        height: ${measures[5]};
    }
`