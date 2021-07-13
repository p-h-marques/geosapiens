import styled from 'styled-components'
import colors from '../../../../styles/colors'
import measures from '../../../../styles/measures'

export const CheckboxFieldStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${measures[5]};

    div {
        display: flex;
        gap: ${measures[1]};
        align-items: center;
    }

    input {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        border: 1px solid ${colors.dark};
        height: ${measures[2]};
        width: ${measures[2]};
        border-radius: 4px;

        &:checked {
            background: ${colors.dark};
        }

        &:after {
            content: '';
            position: relative;
            left: 40%;
            top: 20%;
            width: 15%;
            height: 40%;
            border: solid ${colors.light};
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            display: none;
        }

        &:checked:after {
            display: block;
        }
    }

    label {
        font-size: ${measures[2]};
        line-height: ${measures[3]};
    }

    @media(max-width: 991px){
        grid-template-columns: repeat(3, 1fr);
        gap: ${measures[4]};
    }

    @media(max-width: 767px){
        grid-template-columns: repeat(2, 1fr);
        gap: ${measures[3]};
    }

    @media(max-width: 575px){
        grid-template-columns: 1fr;
        gap: ${measures[2]};
    }
`