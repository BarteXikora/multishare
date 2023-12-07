import StyledFile from './File.styles'
import Button from '../../ui/button/Button'

import iconStar from '../../../assets/icons/icon-star-color.svg'
import iconKebab from '../../../assets/icons/icon-kebab.svg'

type FileProps = {
    displayName: string
    extension: string
    preview: string | false
    isStar: boolean
}

const File = ({ displayName, extension, preview, isStar }: FileProps) => {
    return <StyledFile $variant='secondary' $size='big'>
        <div
            className={`preview ${preview && 'preview-img'}`}
            style={{ backgroundImage: `url('${preview}')` }}
        >
            <div className="extension">{extension}</div>
        </div>

        <div className="file-bar">
            <div className="file-name">{displayName}</div>

            <div className="file-options">
                {
                    isStar && <div className="star">
                        <img src={iconStar} alt='Oznaczono gwiazdką' />
                    </div>
                }

                <Button $variant='tertiary' $size='big'>
                    <img src={iconKebab} alt='Wyświetl opcje' />
                </Button>
            </div>
        </div>
    </StyledFile>
}

export default File