import styled from 'styled-components'
import measures from '../../../../styles/measures'

export const DateFieldStyles = styled.div`
    display: flex;
    align-items: center;
    gap: ${measures[1]};

    span{
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }
`