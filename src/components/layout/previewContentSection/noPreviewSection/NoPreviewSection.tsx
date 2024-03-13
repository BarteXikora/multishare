import StyledNoPreviewSection from './NoPreviewSection.styles'
import getPreviewImage from '../../../../functions/getPreviewImage/getPreviewImage'

const NoPreviewSection = ({ extension }: { extension: string }) => {
    return <StyledNoPreviewSection>
        <div className="icon">
            <img src={getPreviewImage(false, extension)} alt='Podgląd niedostępny' />
        </div>

        <h3>Podgląd niedostępny.</h3>
    </StyledNoPreviewSection>
}

export default NoPreviewSection