import { useSelector, useDispatch } from '../../../../store/store'
import { restoreFromTrash } from '../../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { restoreFromTrashType } from '../../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'
import { closeContextMenu } from '../../../../store/features/contextMenuSlice/contextMenuSlice'

import Button from '../../../ui/button/Button'

import iconRestore from '../../../../assets/icons/icon-restore-dark.svg'
import iconTrash from '../../../../assets/icons/icon-trash-dark.svg'

const TrashContextMenu = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    const handleCloseContextMenu = () => dispatch(closeContextMenu())

    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
        handleCloseContextMenu()
    }

    const handleDeleteForever = () => {
        dispatch(showWindow('CONFIRM_DELETE_FOREVER'))
        handleCloseContextMenu()
    }

    return <>
        <Button $variant='quaternary' onClick={handleRestoreFromTrash}>
            <img src={iconRestore} alt='Przywróć' />

            Przywróć
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleDeleteForever}>
            <img src={iconTrash} alt='Usuń na zawsze...' />

            Usuń na zawsze...
        </Button>
    </>
}

export default TrashContextMenu