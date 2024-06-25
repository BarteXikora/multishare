import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'
import { IconDisplay, IconList } from '../../../ui/icon/Icons'

const DisplayDropdown = () => {
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)

    return <Dropdown
        className='button-dropdown'
        buttonOptions={{ $variant: 'secondary' }}
        showArrow={false}
        buttonContent={<>
            {viewStyle === 'ICONS' ? <IconDisplay $color='dark' /> : <IconList $color='dark' />}

            Wyświetl...
        </>}

        dropdownContent={<>
            <h2>Wyświetl jako:</h2>

            <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                <IconDisplay $color='dark' />

                Ikony
            </Button>

            <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => dispatch(setContentViewStyle('LIST'))}>
                <IconList $color='dark' />

                Lista
            </Button>
        </>}
    />
}

export default DisplayDropdown