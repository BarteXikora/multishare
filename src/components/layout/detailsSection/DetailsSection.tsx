import StyledDetailsSection from './DetailsSection.styles'

import DropSection from '../../elements/dropSection/DropSection'
import ProcessPill from '../../elements/processPill/ProcessPill'

const DetailsSection = () => {
    return <StyledDetailsSection>
        <section className="main-content">
            <DropSection />
        </section>

        <ProcessPill />
    </StyledDetailsSection>
}

export default DetailsSection