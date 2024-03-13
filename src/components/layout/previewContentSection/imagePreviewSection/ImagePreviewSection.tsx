import StyledImagePreviewSection from './ImagePreviewSection.styles'
import Spinner from '../../../ui/spinner/Spinner'

const ImagePreviewSection = ({ data }: { data: string }) => {
    return <StyledImagePreviewSection>
        <div className="loading">
            <Spinner />
        </div>

        <div className="image">
            <img src={data} alt='Podgląd pliku' />
        </div>
    </StyledImagePreviewSection>
}

export default ImagePreviewSection