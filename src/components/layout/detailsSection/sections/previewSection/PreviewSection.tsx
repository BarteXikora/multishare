import StyledPreviewSection from './PreviewSection.styles'

import iconStar from '../../../../../assets/icons/icon-star-color.svg'

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
                        isStar && <img
                            src={iconStar}
                            className='star icon-star'
                            alt='Oznaczono gwiazdką'
                        />
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
                    isStar && <img
                        src={iconStar}
                        className='star image-star'
                        alt='Oznaczono gwiazdką'
                    />
                }
            </div>
        }
    </StyledPreviewSection>
}

export default PreviewSection