/** 
 * Selected tools; displays selected tools when anything is selected
 * 
 * Component renders content or trash selected tools based on the current display type.
 * It also displays the toggle details section button on mobile.
**/

import { useDispatch, useSelector } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'

import Button from '../../../ui/button/Button'
import ContentSelectedTools from '../elements/ContentSelectedTools'
import TrashSelectedTools from '../elements/TrashSelectedTools'
import { IconDetails } from '../../../ui/icon/Icons'

const SelectedTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    // Rendering the component:
    return <section className="selected-tools">
        {displayType !== 'TRASH' && <ContentSelectedTools />}

        {displayType === 'TRASH' && <TrashSelectedTools />}

        <Button className='details-button' onClick={() => dispatch(toggle())}>
            <IconDetails />

            <span className="label">Sczegóły</span>
        </Button>
    </section>
}

export default SelectedTools