import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import ToolsDropdown from './ToolsDropdown'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconNewFolder from '../../../../assets/icons/icon-new-folder.svg'
import iconTools from '../../../../assets/icons/icon-tools.svg'

const GeneralTools = () => {
    return <section className="general-tools">
        <div className="tools-buttons">
            <Button>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki
            </Button>

            <Button $variant='secondary'>
                <img src={iconNewFolder} alt="Nowy folder" />

                Nowy folder...
            </Button>
        </div>

        <Dropdown
            className='open-tools-buttons'
            showArrow={false}
            buttonContent={<><img src={iconTools} alt="Wyświetl narzędzia" /></>}
            dropdownContent={<ToolsDropdown />}
        />
    </section>
}

export default GeneralTools