import StyledFolder from './Folder.styles'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'

type FolderProps = {
    id: number
    displayName: string
    isStar: boolean
    isSelected: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
}

const Folder = ({ id, displayName, isStar, isSelected, onClick, onDoubleClick }: FolderProps) => {
    return <StyledFolder
        $variant='secondary'
        $size='big'
        className={isSelected ? 'selected' : ''}

        onClick={onClick}
        onDoubleClick={onDoubleClick}
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