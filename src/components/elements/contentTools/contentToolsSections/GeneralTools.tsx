import { useDispatch, useSelector } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import ToolsDropdown from './ToolsDropdown'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconNewFolder from '../../../../assets/icons/icon-new-folder-dark.svg'
import iconTools from '../../../../assets/icons/icon-tools.svg'

const GeneralTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    const handleUploadWindow = () => {
        dispatch(showWindow({ title: 'Prześlij pliki', content: 'UPLOAD' }))
    }

    const handleCreateFolderWindow = () => {
        dispatch(showWindow({ title: 'Utwórz nowy folder', content: 'CREATE_NEW_FOLDER' }))
    }

    return <section className="general-tools">
        <div className="tools-buttons">
            <Button disabled={displayType === 'TRASH'} onClick={handleUploadWindow}>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki
            </Button>

            <Button $variant='secondary' disabled={displayType !== 'TREE'} onClick={handleCreateFolderWindow}>
                <img src={iconNewFolder} alt="Nowy folder" />

                Nowy folder...
            </Button>
        </div>

        <Dropdown
            className='open-tools-buttons'
            showArrow={false}
            buttonContent={<><img src={iconTools} alt="Wyświetl narzędzia" /></>}
            dropdownContent={<ToolsDropdown
                uploadHereDisabled={displayType === 'TRASH'}
                createNewFolderDisabled={displayType !== 'TREE'}
            />}
        />
    </section>
}

export default GeneralTools