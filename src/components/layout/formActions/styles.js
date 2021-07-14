import styled from 'styled-components'
import measures from '../../../styles/measures'

export const FormActionsStyles = styled.section`
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${measures[2]};

    @media(max-width: 991px){
        width: 100%;
        margin: 0px ${measures[5]};
    }

    @media(max-width: 575px){
        margin: 0px ${measures[2]};
    }
`