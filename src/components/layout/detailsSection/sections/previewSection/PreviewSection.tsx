/** 
 * Preview section
 * 
 * Used in all details section types. It displays the icon or preview image. It can also
 * display a star icon if a selected element is marked with one.
**/

import StyledPreviewSection from './PreviewSection.styles'
import AnimatedPreviewSection from './PreviewSection.animation'
import { IconStarSpecial } from '../../../../ui/icon/Icons'

// Preview section props styles:
type PreviewSectionType = {
    type: 'ICON' | 'IMAGE'
    image: string
    imageAltText: string
    isStar: boolean
}

const PreviewSection = ({ type, image, imageAltText, isStar }: PreviewSectionType) => {

    // Rendering the component:
    return <StyledPreviewSection>
        <AnimatedPreviewSection key={type + image + imageAltText + isStar} type={type}>
            {
                // For icons:
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
                // For preview images:
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