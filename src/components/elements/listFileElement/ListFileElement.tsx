import Moment from 'react-moment'
import getFileTypeName from '../../../functions/getFileTypeName/getFileTypeName'
import getDataWithUnit from '../../../functions/getDataWithUnit/getDataWithUnit'

import iconStar from '../../../assets/icons/icon-star-color.svg'

type ListFileElementType = {
    name: string
    isStar: boolean
    lastModificationDate?: Date
    extension: string
    fileSizeBites?: number
    isSelected: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const ListFileElement = ({ name, isStar, lastModificationDate, extension, fileSizeBites, isSelected, onClick }: ListFileElementType) => {
    return <button
        className={`list-element list-grid ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
    >
        <div className='name-column'>
            <div className="icon-placeholder"></div>

            <b>{name}</b>
        </div>

        <div className='star-column'>
            {isStar && <img src={iconStar} alt='Oznaczono gwiazdką' />}
        </div>

        <div className='date-column'>
            <Moment format='D.MM.yyyy, HH:mm:ss'>{lastModificationDate}</Moment>
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