import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const FormStyles = styled.main`
    display: flex;
    justify-content: center;
    margin-top: ${measures[5]};

    section.form-title{
        background: ${colors.light};
        width: 800px;
        border-radius: ${measures[1]};
        padding: ${measures[5]};
        border-bottom: ${measures[1]} solid ${colors.dark};

        h1{
            font-size: ${measures[5]};
            padding-bottom: ${measures[2]};
            border-bottom: 1px solid ${colors.dark};
        }

        div.details{
            display: flex;
            column-gap: ${measures[5]};
            align-items: center;
            margin-top: ${measures[2]};
        }

        div.detail{
            display: flex;
            gap: ${measures[1]};

            img{
                height: ${measures[2]};
            }
        }
    }
`