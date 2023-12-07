import StyledDropSection from './DropSection.styles'

import imgDropHere from '../../../assets/images/img-drop.svg'

const DropSection = () => {
    return <StyledDropSection>
        <div className="content">
            <img src={imgDropHere} alt='Przeciągnij i upuść pliki tutaj' />

            Upuść pliki i foldery tutaj, aby dodać je na dysk!
        </div>
    </StyledDropSection>
}

export default DropSection