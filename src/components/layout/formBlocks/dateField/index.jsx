import React, { useContext, forwardRef } from 'react'
import { DateFieldStyles } from './styles'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt'

import Context from '../../../../state/Context'
import * as actions from '../../../../state/actions'

registerLocale('pt-BR', pt)

import ImgCalendar from '../../../../assets/images/calendar.svg'

const DateField = (props) => {
    const dateFormat = 'dd/MM/yyyy'

    const {state, dispatch} = useContext(Context)

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <span onClick={onClick} ref={ref}>
            {value}
        </span>
    ))

    return (
        <DateFieldStyles>
            <img src={ImgCalendar} alt="Data de lançamento" />

            <DatePicker
                dateFormat={dateFormat}
                selected={state.formAnswer[props.componentId]}
                onChange={date => dispatch(actions.updateFormAnswer(date, props.componentId))}
                locale="pt-BR"
                customInput={<ExampleCustomInput />}
                showYearDropdown
                dropdownMode="select"
            />
        </DateFieldStyles>
    )
}

export default DateField
