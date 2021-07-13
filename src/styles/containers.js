import styled from 'styled-components'
import colors from './colors'
import measures from './measures'

export const Block = styled.section`
    background: ${colors.light};
    width: 800px;
    border-radius: ${measures[1]};
    padding: ${measures[5]} ${measures[5]} ${measures[6]} ${measures[5]};

    @media(max-width: 991px){
        width: 100%;
        margin: 0px ${measures[5]};
    }

    @media(max-width: 575px){
        margin: 0px ${measures[2]};
    }
`