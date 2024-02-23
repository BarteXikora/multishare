import iconSeparator from '../../../assets/icons/icon-separator.svg'
import iconStar from '../../../assets/icons/icon-star.svg'

const ListHeader = () => {
    return <div className="list-header list-grid">
        <div className='name-column'>
            Nazwa:
        </div>

        <div className='star-column'>
            <img src={iconSeparator} alt="|" />

            <img src={iconStar} className='icon-star' alt="Oznaczono gwiazdką" />
        </div>

        <div className='date-column'>
            <img src={iconSeparator} alt="|" />

            Data modyfikacji:
        </div>

        <div className='type-column'>
            <img src={iconSeparator} alt="|" />

            Typ:
        </div>

        <div className='size-column'>
            <img src={iconSeparator} alt="|" />

            Rozmiar:
        </div>
    </div>
}

export default ListHeader