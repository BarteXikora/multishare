import { useDispatch, useSelector } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import ToolsDropdown from '../elements/ToolsDropdown'
import { IconUpload, IconNewFolder, IconTools } from '../../../ui/icon/Icons'

const GeneralTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    const handleUploadWindow = () => {
        dispatch(showWindow('UPLOAD'))
    }

    const handleCreateFolderWindow = () => {
        dispatch(showWindow('CREATE_NEW_FOLDER'))
    }

    return <section className="general-tools">
        <div className="tools-buttons">
            <Button disabled={displayType === 'TRASH'} onClick={handleUploadWindow}>
                <IconUpload />

                Prześlij pliki
            </Button>

            <Button $variant='secondary' disabled={displayType !== 'TREE'} onClick={handleCreateFolderWindow}>
                <IconNewFolder $color='dark' />

                Nowy folder...
            </Button>
        </div>

        <Dropdown
            className='open-tools-buttons'
            showArrow={false}
            buttonContent={<IconTools />}
            dropdownContent={<ToolsDropdown
                uploadHereDisabled={displayType === 'TRASH'}
                createNewFolderDisabled={displayType !== 'TREE'}
            />}
        />
    </section>
}

export default GeneralTools