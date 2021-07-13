import styled from 'styled-components'
import measures from '../../styles/measures'

export const FormStyles = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${measures[2]};
    align-items: center;
    justify-content: center;
    margin-top: ${measures[5]};

    @media(max-width: 991px){
        margin: ${measures[5]} ${measures[5]} 0px ${measures[5]};
    }

    @media(max-width: 575px){
        margin: ${measures[5]} ${measures[2]} 0px ${measures[2]};
    }
`