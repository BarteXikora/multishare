import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'

const DisplayDropdown = () => {
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)

    return <Dropdown
        className='button-dropdown'
        buttonOptions={{ $variant: 'secondary' }}
        showArrow={false}
        buttonContent={<>
            <img src={viewStyle === 'ICONS' ? iconDisplay : iconList} alt="Wyświetl..." />

            Wyświetl...
        </>}

        dropdownContent={<>
            <h2>Wyświetl jako:</h2>

            <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                <img src={iconDisplay} alt="Ikony" />

                Ikony
            </Button>

            <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => dispatch(setContentViewStyle('LIST'))}>
                <img src={iconList} alt="Lista" />

                Lista
            </Button>
        </>}
    />
}

export default DisplayDropdown