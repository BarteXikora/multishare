import { useState, useEffect } from 'react'
import { dateType } from '../../elements/dateRangeInput/DateRangeInput'

import DateRangeInput from '../../elements/dateRangeInput/DateRangeInput'
import Button from '../../ui/button/Button'
import StyledDateRangeWindow from './DateRangeWindow.styles'

import iconFilter from '../../../assets/icons/icon-filter.svg'

const DateRangeWindow = () => {
    const [dateFrom, setDateFrom] = useState<dateType>({ isDefault: true, date: '' })
    const [dateTo, setDateTo] = useState<dateType>({ isDefault: true, date: '' })

    const [isDateRangeSelected, setIsDateRangeSelected] = useState<boolean>(false)
    const [isDateRangeOK, setIsDateRangeOK] = useState<boolean>(false)

    useEffect(() => {
        if (dateFrom.isDefault && dateTo.isDefault) return setIsDateRangeSelected(false)

        setIsDateRangeSelected(true)

        if (!dateFrom.isDefault && dateFrom.date === '') return setIsDateRangeOK(false)
        if (!dateTo.isDefault && dateTo.date === '') return setIsDateRangeOK(false)

        setIsDateRangeOK(true)

    }, [dateFrom, dateTo])

    return <StyledDateRangeWindow>
        <section>
            <h2>Wybierz zakres dat:</h2>

            <div className="columns">
                <div className="column">
                    <h3>Data początkowa:</h3>

                    <DateRangeInput state={[dateFrom, setDateFrom]} checkboxName='Od początku' />
                </div>

                <div className="column">
                    <h3>Data końcowa:</h3>

                    <DateRangeInput state={[dateTo, setDateTo]} checkboxName='Do teraz' />
                </div>
            </div>
        </section>

        <section className="actions">
            <Button $variant='secondary'>
                Anuluj
            </Button>

            <Button disabled={!isDateRangeSelected || !isDateRangeOK}>
                <img src={iconFilter} alt='Ustaw zakres dat' />

                Ustaw zakres dat
            </Button>
        </section>

        <section className="warning">
            {
                isDateRangeSelected ?
                    !isDateRangeOK && 'Wybrano nieprawidłowy zakres dat.'

                    :

                    'Należy wybrać zakres dat.'
            }
        </section>
    </StyledDateRangeWindow>
}

export default DateRangeWindow