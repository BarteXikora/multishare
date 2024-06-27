import StyledPreviewSection from './PreviewSection.styles'
import AnimatedPreviewSection from './PreviewSection.animation'
import { IconStarSpecial } from '../../../../ui/icon/Icons'

type PreviewSectionType = {
    type: 'ICON' | 'IMAGE'
    image: string
    imageAltText: string
    isStar: boolean
}

const PreviewSection = ({ type, image, imageAltText, isStar }: PreviewSectionType) => {
    return <StyledPreviewSection>
        <AnimatedPreviewSection key={type + image + imageAltText + isStar} type={type}>
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
        </AnimatedPreviewSection>
    </StyledPreviewSection>
}

export default PreviewSection