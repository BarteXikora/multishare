import { useState, useEffect } from 'react'

import StyledFile from './File.styles'
import getPreviewImage from '../../../functions/getPreviewImage/getPreviewImage'

import iconStar from '../../../assets/icons/icon-star-color.svg'

type FileProps = {
    displayName: string
    extension: string
    preview: string | false
    isStar: boolean
    isSelected: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void
}

const File = ({ displayName, extension, preview, isStar, isSelected, onClick, onTouchStart, onTouchEnd }: FileProps) => {
    const [previewImage, setPreviewImage] = useState<string>('')

    useEffect(() => {
        setPreviewImage(getPreviewImage(preview, extension))

    }, [preview, extension])

    return <StyledFile
        $variant='secondary'
        $size='big'
        className={isSelected ? 'selected' : ''}

        onClick={onClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
    >
        <div
            className={`preview ${preview && 'preview-img'}`}
            style={{ backgroundImage: `url('${previewImage}')` }}
        >
            <div className="extension">{extension}</div>
        </div>

        <div className="file-bar">
            <div className="file-name">{displayName}</div>

            {
                isStar && <div className="star">
                    <img src={iconStar} alt='Oznaczono gwiazdką' />
                </div>
            }
        </div>
    </StyledFile>
}

export default File