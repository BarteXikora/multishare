import StyledContentTools from './ContentTools.styles'
import Button from '../../ui/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.svg'
import iconCreate from '../../../assets/icons/icon-create.svg'
import iconDownload from '../../../assets/icons/icon-download.svg'
import iconMove from '../../../assets/icons/icon-move.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'
import iconTrash from '../../../assets/icons/icon-trash.svg'
import iconSelect from '../../../assets/icons/icon-ok.svg'
import iconSort from '../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../assets/icons/icon-display.svg'

const ContentTools = () => {
    return <StyledContentTools>
        <section className="general-tools">
            <Button>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki tutaj
            </Button>

            <Button $variant='secondary'>
                <img src={iconCreate} alt="Utwórz..." />

                Utwórz...
            </Button>
        </section>

        <section className="selected-tools">
            <Button>
                <img src={iconDownload} alt="Pobierz" />

                Pobierz
            </Button>

            <Button $variant='secondary'>
                <img src={iconMove} alt="Przenieś do..." />

                Przenieś do...
            </Button>

            <Button $variant='secondary'>
                <img src={iconStar} alt="Oznacz gwiazdką" />

                Oznacz gwiazdką
            </Button>

            <Button $variant='wrong'>
                <img src={iconTrash} alt="Usuń" />

                Usuń
            </Button>
        </section>

        <section className="list-tools">
            <Button $variant='secondary'>
                <img src={iconSelect} alt="Zaznacz wszystko" />

                Zaznacz wszystko
            </Button>

            <Button $variant='secondary'>
                <img src={iconSort} alt="Sortuj..." />

                Sortuj...
            </Button>

            <Button $variant='secondary'>
                <img src={iconFilter} alt="Filtruj..." />

                Filtruj...
            </Button>

            <Button $variant='secondary'>
                <img src={iconDisplay} alt="Wyświetl..." />

                Wyświetl...
            </Button>
        </section>
    </StyledContentTools>
}

export default ContentTools