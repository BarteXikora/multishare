/** 
 * General Tools; displays general tools buttons
 * 
 * It renders upload and create new folder buttons on desktop and open tools
 * window button on mobile.
 * 
 * It sets buttons disabled based on the current display type:
 * - there is no new folder option in the all files view
 * - there is also no upload option in the trash 
**/

import { useDispatch, useSelector } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import { IconUpload, IconNewFolder, IconTools } from '../../../ui/icon/Icons'

const GeneralTools = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    // Handling buttons on clicks:
    const handleUploadWindow = () => {
        dispatch(showWindow('UPLOAD'))
    }

    const handleCreateFolderWindow = () => {
        dispatch(showWindow('CREATE_NEW_FOLDER'))
    }

    const handleToolsWindow = () => {
        dispatch(showWindow('TOOLS'))
    }

    // Rendering the component:
    return <section className="general-tools">
        <div className="tools-buttons">
            <Button disabled={displayType === 'TRASH'} onClick={handleUploadWindow}>
                <IconUpload $color={displayType === 'TRASH' ? 'dark' : 'light'} />

                Prześlij pliki
            </Button>

            <Button $variant='secondary' disabled={displayType !== 'TREE'} onClick={handleCreateFolderWindow}>
                <IconNewFolder $color='dark' />

                Nowy folder...
            </Button>
        </div>

        <Button className='open-tools-buttons' onClick={handleToolsWindow}>
            <IconTools />
        </Button>
    </section>
}

export default GeneralTools