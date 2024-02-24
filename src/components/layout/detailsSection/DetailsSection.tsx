import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'

import StyledDetailsSection from './DetailsSection.styles'
import Button from '../../ui/button/Button'
import ProcessPill from '../../elements/processPill/ProcessPill'

import iconClose from '../../../assets/icons/icon-close.svg'

const DetailsSection = () => {
    const isShown = useSelector(state => state.detailsSection.isShown)
    const dispatch = useDispatch()

    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>

        <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
            <img src={iconClose} alt='Zamknij szczegóły' />
        </Button>

        <section className='main-content'>
            main content
        </section>

        <div className="process-pill">
            <ProcessPill />
        </div>
    </StyledDetailsSection>
}

export default DetailsSection