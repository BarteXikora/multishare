/** 
 * List folder element; renders the single content list element for the folder
 * 
 * It is rendered in the ContentListView. Gets all data as props and renders a stylized button.
**/

import Moment from 'react-moment'
import moment from 'moment'

import { IconFolder, IconStarSpecial } from '../../ui/icon/Icons'

// List folder element props types:
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

    // Rendering the component:
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
            {isStar && <IconStarSpecial />}
        </div>

        <div className='date-column'>
            {
                lastModificationDate &&
                moment(lastModificationDate).isValid() &&
                <Moment format='DD.MM.yyyy, HH:mm:ss'>{lastModificationDate}</Moment>
            }
        </div>

        <div className='type-column'>
            {isEmpty ? 'Pusty folder' : 'Folder plików'}
        </div>
    </button>
}

export default ListFolderElement