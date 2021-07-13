import styled from 'styled-components'
import colors from '../../../../styles/colors'
import measures from '../../../../styles/measures'
import {Block} from '../../../../styles/containers'

export const TextFieldStyles = styled(Block)`
    display: flex;
    flex-direction: column;
    gap: ${measures[4]};

    div.labels{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    div.actions{
        display: flex;
        flex-direction: column;
        gap: ${measures[1]};
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

    div.actions {
        input{
            border: 0px;
            border-bottom: 1px solid ${colors.dark};
            background-color: transparent!important;
            width: 100%;
            font-size: ${measures[2]};
            color: ${colors.dark};
            padding: ${measures[1]};
        }

        span {
            display: none;
            font-size: ${measures[0]};
            font-style: italic;
            color: ${colors.danger};
        }

        &.error{
            input{
                border-bottom: 1px solid ${colors.danger};
                color: ${colors.danger};
            }

            span{
                display: inline;
            }
        }
    }
`