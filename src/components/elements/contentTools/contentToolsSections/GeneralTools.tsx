import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'

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

        <Dropdown
            className='open-tools-buttons'
            showArrow={false}
            buttonContent={<><img src={iconTools} alt="Wyświetl narzędzia" /></>}
            dropdownContent={<>
                <Button>
                    <img src={iconUpload} alt="Prześlij pliki tutaj" />

                    Prześlij pliki tutaj
                </Button>

                <Button $variant='secondary'>
                    <img src={iconCreate} alt="Utwórz..." />

                    Utwórz...
                </Button>
            </>}
        />
    </section>
}

export default GeneralTools