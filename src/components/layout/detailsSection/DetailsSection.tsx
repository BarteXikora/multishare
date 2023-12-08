import StyledDetailsSection from './DetailsSection.styles'
import Button from '../../ui/button/Button'

import DropSection from '../../elements/dropSection/DropSection'
import ProcessPill from '../../elements/processPill/ProcessPill'

import iconClose from '../../../assets/icons/icon-close.svg'

const DetailsSection = () => {
    return <StyledDetailsSection className='_shown'>
        <Button className='close-button' $variant='wrong' $size='big'>
            <img src={iconClose} alt='Zamknij szczegóły' />
        </Button>

        <section className="main-content">
            <DropSection />
        </section>

        <div className="process-pill">
            <ProcessPill />
        </div>
    </StyledDetailsSection>
}

export default DetailsSection