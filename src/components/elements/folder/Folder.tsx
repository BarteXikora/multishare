import StyledFolder from './Folder.styles'
import { IconFolder, IconStarSpecial } from '../../ui/icon/Icons'

type FolderProps = {
    id: number
    displayName: string
    isStar: boolean
    isSelected: boolean
    isOnMove: boolean
    isTarget: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onContextMenu: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => void
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => void
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void
}

const Folder = ({
    id, displayName, isStar, isSelected, isOnMove, isTarget,
    onClick, onContextMenu, onDoubleClick, onTouchStart, onTouchEnd,
    onMouseDown, onMouseUp, onMouseMove, onMouseEnter, onMouseLeave
}: FolderProps) => {

    return <StyledFolder
        $variant='secondary'
        $size='big'
        className={isOnMove ? 'on-move' : isTarget ? 'target' : isSelected ? 'selected' : ''}

        onClick={onClick}
        onContextMenu={onContextMenu}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}

        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div className="folder-name">
            <IconFolder $color='dark' />

            {displayName}
        </div>

        {
            isStar && <div className="star">
                <IconStarSpecial />
            </div>
        }
    </StyledFolder>
}

export default Folder