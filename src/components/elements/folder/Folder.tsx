import StyledFolder from './Folder.styles'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'

type FolderProps = {
    id: number
    displayName: string
    isStar: boolean
    isSelected: boolean
    isOnMove: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => void
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
}

const Folder = ({
    id, displayName, isStar, isSelected, isOnMove, onClick,
    onDoubleClick, onTouchStart, onTouchEnd,
    onMouseDown, onMouseMove
}: FolderProps) => {

    return <StyledFolder
        $variant='secondary'
        $size='big'
        className={isOnMove ? 'on-move' : isSelected ? 'selected' : ''}

        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}

        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
    >
        <div className="folder-name">
            <img src={iconFolder} alt='Folder' />

            {displayName}
        </div>

        {
            isStar && <div className="star">
                <img src={iconStar} alt='Oznaczono gwiazdką' />
            </div>
        }
    </StyledFolder>
}

export default Folder