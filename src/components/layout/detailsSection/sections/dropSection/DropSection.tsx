import StyledDropSection from './DropSection.styles'

import imgDrop from '../../../../../assets/images/img-drop.svg'

const DropSection = () => {
    return <StyledDropSection>
        <div className="content">
            <img src={imgDrop} alt='Przeciągnij i upuść pliki tutaj' />

            Upuść pliki i foldery tutaj, aby dodać je na dysk!
        </div>
    </StyledDropSection>
}

export default DropSection