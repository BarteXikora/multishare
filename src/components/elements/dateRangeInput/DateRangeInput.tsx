/** 
 * Date range input; displays date selection
 * 
 * Renders the checkbox, when not selected it displays date input as well.  
**/

import StyledDateRangeInput from './DateRangeInput.styles'

export type dateType = { isDefault: boolean, date: string }

// Date range input props types:
type dateRangeInputType = {
    state: [dateType, (d: dateType) => void]
    checkboxName: string
}

const DateRangeInput = ({ state, checkboxName }: dateRangeInputType) => {

    // Renders the component:
    return <StyledDateRangeInput>
        <label>
            <input
                type="checkbox"
                checked={state[0].isDefault}
                onChange={e => state[1]({ ...state[0], isDefault: e.target.checked })}
            />

            <p>{checkboxName}</p>
        </label>

        {
            !state[0].isDefault && <input
                type="date"
                value={state[0].date}
                onChange={e => state[1]({ ...state[0], date: e.target.value })}
                className={state[0].date === '' ? 'empty' : ''}
            />
        }
    </StyledDateRangeInput>
}

export default DateRangeInput