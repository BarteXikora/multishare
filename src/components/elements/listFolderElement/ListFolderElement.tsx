import Moment from 'react-moment'
import moment from 'moment'

import { IconFolder, IconStar } from '../../ui/icon/Icons'

type ListFolderElementType = {
    name: string
    isStar: boolean
    lastModificationDate?: string
    isEmpty: boolean
    isSelected: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: () => void
    onTouchMove: () => void
    onTouchEnd: () => void
}

const ListFolderElement = ({
    name, isStar, lastModificationDate, isEmpty, isSelected,
    onClick, onDoubleClick, onTouchStart, onTouchMove, onTouchEnd

}: ListFolderElementType) => {

    return <button
        className={`list-element list-grid ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
    >
        <div className='name-column'>
            <IconFolder $color='dark' />

            <b>{name}</b>
        </div>

        <div className='star-column'>
            {isStar && <IconStar $color='dark' />}
        </div>

        <div className='date-column'>
            {
                moment(lastModificationDate).isValid() && <Moment format='DD.MM.yyyy, HH:mm:ss'>{lastModificationDate}</Moment>
            }
        </div>

        <div className='type-column'>
            {isEmpty ? 'Pusty folder' : 'Folder plików'}
        </div>
    </button>
}

export default ListFolderElement