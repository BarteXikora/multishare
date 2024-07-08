/** 
 * Trash Selected tools; dispalys tools for the trash content when anything is selected
**/

import { useDispatch, useSelector } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { restoreFromTrash } from '../../../../store/features/contentSlice/contentSlice'
import { restoreFromTrashType } from '../../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'

import Button from '../../../ui/button/Button'
import { IconTrash, IconRestore } from '../../../ui/icon/Icons'

const TrashSelectedTools = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    // Handling buttons onCLicks:
    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
    }

    const handleDeleteForever = () => dispatch(showWindow('CONFIRM_DELETE_FOREVER'))

    // Rendering the component:
    return <div className="tools-buttons">
        <Button onClick={handleRestoreFromTrash}>
            <IconRestore />

            <span className="label">Przywróć...</span>
        </Button>

        <Button $variant='wrong' onClick={handleDeleteForever}>
            <IconTrash />

            <span className="label">Usuń na zawsze</span>
        </Button>
    </div>
}

export default TrashSelectedTools