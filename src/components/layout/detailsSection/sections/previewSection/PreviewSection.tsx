import StyledPreviewSection from './PreviewSection.styles'
import { IconStar } from '../../../../ui/icon/Icons'

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
                        isStar && <IconStar $color='warning' />
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
                    isStar && <IconStar $color='warning' />
                }
            </div>
        }
    </StyledPreviewSection>
}

export default PreviewSection