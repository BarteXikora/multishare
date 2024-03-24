import { useDispatch, useSelector } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import ToolsDropdown from './ToolsDropdown'
import NewFolderWindow from '../../../windows/newFolderWindow/NewFolderWindow'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconNewFolder from '../../../../assets/icons/icon-new-folder-dark.svg'
import iconTools from '../../../../assets/icons/icon-tools.svg'

const GeneralTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    const handleCreateFolderWindow = () => {
        dispatch(showWindow({ title: 'Utwórz nowy folder', content: <NewFolderWindow /> }))
    }

    return <section className="general-tools">
        <div className="tools-buttons">
            <Button>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki
            </Button>

            <Button $variant='secondary' disabled={displayType === 'FILES'} onClick={handleCreateFolderWindow}>
                <img src={iconNewFolder} alt="Nowy folder" />

                Nowy folder...
            </Button>
        </div>

        <Dropdown
            className='open-tools-buttons'
            showArrow={false}
            buttonContent={<><img src={iconTools} alt="Wyświetl narzędzia" /></>}
            dropdownContent={<ToolsDropdown createNewFolderDisabled={displayType === 'FILES'} />}
        />
    </section>
}

export default GeneralTools