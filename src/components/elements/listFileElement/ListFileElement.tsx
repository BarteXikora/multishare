import Moment from 'react-moment'
import moment from 'moment'

import getFileTypeName from '../../../functions/fileTypes/getFileTypeName/getFileTypeName'
import getDataWithUnit from '../../../functions/getDataWithUnit/getDataWithUnit'

import { IconStar } from '../../ui/icon/Icons'

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
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => void
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => void
}

const ListFileElement = ({
    name, isStar, lastModificationDate, extension, fileSizeBites,
    isSelected, onClick, onDoubleClick, onTouchStart, onTouchEnd, isFolderIconOffset

}: ListFileElementType) => {

    return <button
        className={`list-element list-grid ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
    >
        <div className='name-column'>
            {isFolderIconOffset && <div className="icon-placeholder"></div>}

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
            {getFileTypeName(extension)}
        </div>

        <div className='size-column'>
            {fileSizeBites ? getDataWithUnit(fileSizeBites) : 'Brak danych'}
        </div>
    </button>
}

export default ListFileElement