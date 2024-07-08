/** 
 * Folder; renders the folder content button
 * 
 * It gets all folders data as props and renders a stylized button
**/

import StyledFolder from './Folder.styles'
import Star from '../star/Star'
import { IconFolder } from '../../ui/icon/Icons'

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
    onTouchStart: () => void
    onTouchMove: () => void
    onTouchEnd: () => void
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => void
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => void
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void
}

const Folder = ({
    id, displayName, isStar, isSelected, isOnMove, isTarget,
    onClick, onContextMenu, onDoubleClick, onTouchStart, onTouchMove,
    onTouchEnd, onMouseDown, onMouseUp, onMouseMove, onMouseEnter, onMouseLeave
}: FolderProps) => {

    // Rendering the component:
    return <StyledFolder
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
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div className="folder-name">
            <IconFolder $color='dark' />

            {displayName}
        </div>

        <Star isStar={isStar} />
    </StyledFolder>
}

export default Folder