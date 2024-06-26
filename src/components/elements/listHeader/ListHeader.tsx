// import iconSeparator from '../../../assets/icons/icon-separator.svg'
import { IconStar } from '../../ui/icon/Icons'

const ListHeader = () => {
    return <div className="list-header list-grid">
        <div className='name-column'>
            Nazwa:
        </div>

        <div className='star-column'>
            {/* <img src={iconSeparator} alt="|" /> */}

            <IconStar />
        </div>

        <div className='date-column'>
            {/* <img src={iconSeparator} alt="|" /> */}

            Data modyfikacji:
        </div>

        <div className='type-column'>
            {/* <img src={iconSeparator} alt="|" /> */}

            Typ:
        </div>

        <div className='size-column'>
            {/* <img src={iconSeparator} alt="|" /> */}

            Rozmiar:
        </div>
    </div>
}

export default ListHeader