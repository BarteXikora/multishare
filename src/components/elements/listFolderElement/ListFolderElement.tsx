import Moment from 'react-moment'

import iconFolder from '../../../assets/icons/icon-project.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'

type ListFolderElementType = {
    name: string
    isStar: boolean
    lastModificationDate?: Date
    isEmpty: boolean
    isSelected: boolean
}

const ListFolderElement = ({ name, isStar, lastModificationDate, isEmpty, isSelected }: ListFolderElementType) => {
    return <div className={`list-element list-grid ${isSelected ? 'selected' : ''}`} role='button'>
        <div>
            <img src={iconFolder} alt='Folder:' />

            <b>{name}</b>
        </div>

        <div>
            {isStar && <img src={iconStar} alt='Oznaczono gwiazdką' />}
        </div>

        <div>
            <Moment format='D.MM.yyyy, HH:mm:ss'>{lastModificationDate}</Moment>
        </div>

        <div>
            {isEmpty ? 'Pusty folder' : 'Folder plików'}
        </div>
    </div>
}

export default ListFolderElement