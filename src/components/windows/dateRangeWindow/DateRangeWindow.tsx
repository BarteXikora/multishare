import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'
import { dateType } from '../../elements/dateRangeInput/DateRangeInput'

import DateRangeInput from '../../elements/dateRangeInput/DateRangeInput'
import Button from '../../ui/button/Button'
import { IconFilter } from '../../ui/icon/Icons'

const DateRangeWindow = () => {
    const dispatch = useDispatch()

    const currentFilter = useSelector(state => state.content.filter)

    const [dateFrom, setDateFrom] = useState<dateType>({ isDefault: true, date: '' })
    const [dateTo, setDateTo] = useState<dateType>({ isDefault: true, date: '' })

    const [isDateRangeSelected, setIsDateRangeSelected] = useState<boolean>(false)
    const [isDateRangeOK, setIsDateRangeOK] = useState<boolean>(false)

    const handleSetDateRange = () => {
        if (!isDateRangeOK || !isDateRangeSelected) return

        const dateRange = {
            from: dateFrom.isDefault ? null : new Date(dateFrom.date),
            to: dateTo.isDefault ? null : new Date(dateTo.date)
        }

        dispatch(setFilter({ ...currentFilter, time: dateRange }))
        dispatch(closeWindow())
    }

    useEffect(() => {
        if (dateFrom.isDefault && dateTo.isDefault) return setIsDateRangeSelected(false)

        setIsDateRangeSelected(true)

        if (!dateFrom.isDefault && dateFrom.date === '') return setIsDateRangeOK(false)
        if (!dateTo.isDefault && dateTo.date === '') return setIsDateRangeOK(false)

        setIsDateRangeOK(true)

    }, [dateFrom, dateTo])

    return <>
        <section>
            <h2 className='extra-margin'>Wybierz zakres dat:</h2>

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
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())} className='no-mobile-button'>
                Anuluj
            </Button>

            <Button disabled={!isDateRangeSelected || !isDateRangeOK} onClick={handleSetDateRange}>
                <IconFilter />

                Ustaw zakres dat
            </Button>
        </section>

        <section className="info-box">
            {
                isDateRangeSelected ?
                    !isDateRangeOK && <span className="error">Wybrano nieprawidłowy zakres dat.</span>

                    :

                    <span className="warning">Należy wybrać zakres dat.</span>
            }
        </section>
    </>
}

export default DateRangeWindow