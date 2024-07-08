/** 
 * Elements context menu
 * 
 * It is rendered in the ContextMenu component conditionally if clcked on the Folder
 * or File button. 
**/

import { useSelector, useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { downloadElements } from '../../../../store/features/contentSlice/contentSlice'
import { updateContent } from '../../../../store/features/contentSlice/contentSlice'
import { closeContextMenu } from '../../../../store/features/contextMenuSlice/contextMenuSlice'
import { updateContentType } from '../../../../store/features/contentSlice/contentSlice.types'

import Button from '../../../ui/button/Button'
import { IconDownload, IconMove, IconEdit, IconStar, IconTrash } from '../../../ui/icon/Icons'

const ElementsContextMenu = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const content = useSelector(state => state.content.loadedContent)

    // Handling butons onClicks: 
    const handleCloseContextMenu = () => dispatch(closeContextMenu())

    const handleDownload = () => {
        dispatch(downloadElements({
            type: 'REQ',
            folders: selected.folders,
            files: selected.files
        }))

        handleCloseContextMenu()
    }

    const handleDelete = () => {
        dispatch(showWindow('CONFIRM_DELETE'))
        handleCloseContextMenu()
    }

    const handleRename = () => {
        dispatch(showWindow('RENAME'))
        handleCloseContextMenu()
    }

    const handleMove = () => {
        dispatch(showWindow('MOVE'))
        handleCloseContextMenu()
    }

    const handleMarkWithStar = () => {
        if (content.status !== 'READY') return

        let isEverythingMarked =
            content.content.folders.filter(f => selected.folders.includes(f.id) && f.star).length +
            content.content.files.filter(f => selected.files.includes(f.id) && f.star).length ===
            selected.folders.length + selected.files.length

        let data: updateContentType = {
            folders: selected.folders.map(f => { return { id: f, star: !isEverythingMarked } }),
            files: selected.files.map(f => { return { id: f, star: !isEverythingMarked } })
        }

        dispatch(updateContent(data))
        handleCloseContextMenu()
    }

    // Rendering the component:
    return <>
        <Button $variant='quaternary' onClick={handleDownload}>
            <IconDownload $color='dark' />

            Pobierz
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleMove}>
            <IconMove $color='dark' />

            Przenieś do...
        </Button>

        <Button $variant='quaternary' onClick={handleRename} disabled={selected.folders.length + selected.files.length > 1}>
            <IconEdit $color='dark' />

            Zmień nazwę...
        </Button>

        <Button $variant='quaternary' onClick={handleMarkWithStar}>
            <IconStar $color='dark' />

            Oznacz gwiazdką
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleDelete}>
            <IconTrash $color='dark' />

            Usuń
        </Button>
    </>
}

export default ElementsContextMenu