import { useState, useEffect } from 'react'
import getPreviewImage from '../../../functions/fileTypes/getPreviewImage/getPreviewImage'

import StyledFile from './File.styles'
import Star from '../star/Star'

type FileProps = {
    displayName: string
    extension: string
    preview: string | false
    isStar: boolean
    isSelected: boolean
    isOnMove: boolean
    isTarget: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onContextMenu: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: () => void
    onTouchMove: () => void
    onTouchEnd: () => void
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => void
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void
}

const File = ({
    displayName, extension, preview, isStar, isSelected, isOnMove, isTarget,
    onClick, onContextMenu, onDoubleClick, onTouchStart, onTouchMove, onTouchEnd,
    onMouseDown, onMouseMove, onMouseEnter, onMouseLeave
}: FileProps) => {
    const [previewImage, setPreviewImage] = useState<string>('')

    useEffect(() => {
        setPreviewImage(getPreviewImage(preview, extension))

    }, [preview, extension])

    return <StyledFile
        $variant='secondary'
        $size='big'
        className={isOnMove ? 'on-move' : isTarget ? 'target' : isSelected ? 'selected' : ''}

        onClick={onClick}
        onContextMenu={onContextMenu}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div
            className={`preview ${preview && 'preview-img'}`}
            style={{ backgroundImage: `url('${previewImage}')` }}
        >
            <div className="extension">{extension}</div>
        </div>

        <div className="file-bar">
            <div className="file-name">{displayName}</div>

            <Star isStar={isStar} />
        </div>
    </StyledFile>
}

export default File