import Button from '../../../ui/button/Button'
import ContentSelectedTools from '../elements/ContentSelectedTools'
import TrashSelectedTools from '../elements/TrashSelectedTools'

import { useDispatch, useSelector } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'

import iconDetails from '../../../../assets/icons/icon-details.svg'

const SelectedTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    return <section className="selected-tools">
        {displayType !== 'TRASH' && <ContentSelectedTools />}

        {displayType === 'TRASH' && <TrashSelectedTools />}

        <Button className='details-button' onClick={() => dispatch(toggle())}>
            <img src={iconDetails} alt="Pokaż szczegóły" />

            <span className="label">Sczegóły</span>
        </Button>
    </section>
}

export default SelectedTools