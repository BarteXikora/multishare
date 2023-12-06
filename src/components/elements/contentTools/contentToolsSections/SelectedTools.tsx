import Button from '../../../ui/button/Button'

import iconDownload from '../../../../assets/icons/icon-download.svg'
import iconMove from '../../../../assets/icons/icon-move.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'
import iconTrash from '../../../../assets/icons/icon-trash.svg'

const SelectedTools = () => {
    return <section className="selected-tools">
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
}

export default SelectedTools