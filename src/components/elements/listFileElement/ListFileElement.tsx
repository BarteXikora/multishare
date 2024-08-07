/** 
 * List file element; renders the single content list element for the file
 * 
 * It is rendered in the ContentListView. Gets all data as props and renders a stylized button.
**/

import Moment from 'react-moment'
import moment from 'moment'

import getFileTypeName from '../../../functions/fileTypes/getFileTypeName/getFileTypeName'
import getDataWithUnit from '../../../functions/getDataWithUnit/getDataWithUnit'

import { IconStarSpecial } from '../../ui/icon/Icons'

// List file element props types:
type ListFileElementType = {
    name: string
    isStar: boolean
    lastModificationDate?: string
    extension: string
    fileSizeBites?: number
    isSelected: boolean
    isFolderIconOffset: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    onDoubleClick: () => void
    onTouchStart: () => void
    onTouchMove: () => void
    onTouchEnd: () => void
}

const ListFileElement = ({
    name, isStar, lastModificationDate, extension, fileSizeBites,
    isSelected, onClick, onDoubleClick, onTouchStart, onTouchMove,
    onTouchEnd, isFolderIconOffset

}: ListFileElementType) => {

    // Rendering the coponent:
    return <button
        className={`list-element list-grid ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
    >
        <div className='name-column'>
            <div className={`icon-placeholder ${isFolderIconOffset ? 'offset' : ''}`}></div>

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
            {getFileTypeName(extension)}
        </div>

        <div className='size-column'>
            {fileSizeBites ? getDataWithUnit(fileSizeBites) : 'Brak danych'}
        </div>
    </button>
}

export default ListFileElement