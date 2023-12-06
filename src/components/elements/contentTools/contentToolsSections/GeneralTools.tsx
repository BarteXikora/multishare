import Button from '../../../ui/button/Button'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconCreate from '../../../../assets/icons/icon-create.svg'

const GeneralTools = () => {
    return <section className="general-tools">
        <Button>
            <img src={iconUpload} alt="Prześlij pliki tutaj" />

            Prześlij pliki tutaj
        </Button>

        <Button $variant='secondary'>
            <img src={iconCreate} alt="Utwórz..." />

            Utwórz...
        </Button>
    </section>
}

export default GeneralTools