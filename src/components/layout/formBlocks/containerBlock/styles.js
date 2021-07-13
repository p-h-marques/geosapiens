import styled from 'styled-components'
import colors from '../../../../styles/colors'
import measures from '../../../../styles/measures'

export const ContainerBlockStyles = styled.section`
    background: ${colors.light};
    width: 800px;
    border-radius: ${measures[1]};
    padding: ${measures[5]} ${measures[5]} ${measures[6]} ${measures[5]};
    display: flex;
    flex-direction: column;
    gap: ${measures[4]};

    div.labels{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    div.titles{
        display: flex;
        flex-direction: column;
        gap: ${measures[1]};

        h2 {
            font-size: ${measures[3]};
            font-weight: normal;
        }

        p{
            font-size: ${measures[0]};
            color: ${colors.medium};
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