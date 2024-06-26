import StyledPreviewSection from './PreviewSection.styles'
import { IconStarSpecial } from '../../../../ui/icon/Icons'

type PreviewSectionType = {
    type: 'ICON' | 'IMAGE'
    image: string
    imageAltText: string
    isStar: boolean
}

const PreviewSection = ({ type, image, imageAltText, isStar }: PreviewSectionType) => {
    return <StyledPreviewSection>
        {
            type === 'ICON' && <div className="icon-section">
                <div className="icon">
                    <img src={image} className='icon-img' alt={imageAltText} />

                    {
                        isStar && <div className="star icon-star"><IconStarSpecial /></div>
                    }
                </div>
            </div>
        }

        {
            type === 'IMAGE' && <div
                className="image-section"
                style={{ backgroundImage: `url(${image})` }}
            >
                {
                    isStar && <div className="star image-star"><IconStarSpecial /></div>
                }
            </div>
        }
    </StyledPreviewSection>
}

export default PreviewSection