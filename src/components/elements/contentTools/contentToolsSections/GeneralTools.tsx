import Button from '../../../ui/button/Button'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconCreate from '../../../../assets/icons/icon-create.svg'
import iconTools from '../../../../assets/icons/icon-tools.svg'

const GeneralTools = () => {
    return <section className="general-tools">
        <div className="tools-buttons">
            <Button>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki tutaj
            </Button>

            <Button $variant='secondary'>
                <img src={iconCreate} alt="Utwórz..." />

                Utwórz...
            </Button>
        </div>

        <Button className='open-tools-buttons'>
            <img src={iconTools} alt="Wyświetl narzędzia" />

            Narzędzia...
        </Button>
    </section>
}

export default GeneralTools