import StyledSortWindow from './SortWindow.styles'
import Button from '../../ui/button/Button'

import iconSortAlphabet from '../../../assets/icons/icon-sort-alphabet.svg'
import iconSortDate from '../../../assets/icons/icon-sort-date.svg'
import iconSortType from '../../../assets/icons/icon-sort-type.svg'
import iconUp from '../../../assets/icons/icon-up.svg'
import iconDown from '../../../assets/icons/icon-down.svg'
import iconSort from '../../../assets/icons/icon-sort.svg'

const SortWindow = () => {
    return <StyledSortWindow>
        <section className='sort-section'>
            <h2>Sortuj według:</h2>

            <Button $variant='quaternary'>
                <img src={iconSortAlphabet} alt="Sortuj Nazwa" />

                Nazwa
            </Button>

            <Button $variant='quaternary'>
                <img src={iconSortDate} alt="Data" />

                Data
            </Button>

            <Button $variant='quaternary'>
                <img src={iconSortType} alt="Typ" />

                Typ
            </Button>
        </section>

        <section className='sort-section'>
            <h2>Metoda sortowania:</h2>

            <Button $variant='quaternary'>
                <img src={iconDown} alt="Rosnąco" />

                Rosnąco
            </Button>

            <Button $variant='quaternary'>
                <img src={iconUp} alt="Malejąco" />

                Malejąco
            </Button>
        </section>

        <section className="actions">
            <Button $variant='secondary'>
                Anuluj
            </Button>

            <Button>
                <img src={iconSort} alt="Sortuj" />

                Sortuj
            </Button>
        </section>
    </StyledSortWindow>
}

export default SortWindow