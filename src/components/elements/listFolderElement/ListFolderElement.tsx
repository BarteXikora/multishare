import Moment from 'react-moment'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'

type ListFolderElementType = {
    name: string
    isStar: boolean
    lastModificationDate?: Date
    isEmpty: boolean
    isSelected: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void
}

const ListFolderElement = ({
    name, isStar, lastModificationDate, isEmpty, isSelected, onClick, onDoubleClick, onTouchStart, onTouchEnd

}: ListFolderElementType) => {

    return <button
        className={`list-element list-grid ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
    >
        <div className='name-column'>
            <img src={iconFolder} alt='Folder:' />

            <b>{name}</b>
        </div>

        <div className='star-column'>
            {isStar && <img src={iconStar} alt='Oznaczono gwiazdką' />}
        </div>

        <div className='date-column'>
            <Moment format='D.MM.yyyy, HH:mm:ss'>{lastModificationDate}</Moment>
        </div>

        <div className='type-column'>
            {isEmpty ? 'Pusty folder' : 'Folder plików'}
        </div>
    </button>
}

export default ListFolderElement