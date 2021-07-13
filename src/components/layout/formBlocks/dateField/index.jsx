import React, { useState, forwardRef } from 'react'
import { DateFieldStyles } from './styles'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt'

registerLocale('pt-BR', pt)

import ImgCalendar from '../../../../assets/images/calendar.svg'

const DateField = () => {
    const dateFormat = 'dd/MM/yyyy'
    const [datefield, setDatefield] = useState(new Date())

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
                selected={datefield}
                onChange={date => setDatefield(date)}
                locale="pt-BR"
                customInput={<ExampleCustomInput />}
                showYearDropdown
                dropdownMode="select"
            />
        </DateFieldStyles>
    )
}

export default DateField
