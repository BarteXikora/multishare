import { useSelector, useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { downloadElements } from '../../../../store/features/contentSlice/contentSlice'
import { updateContent } from '../../../../store/features/contentSlice/contentSlice'
import { closeContextMenu } from '../../../../store/features/contextMenuSlice/contextMenuSlice'
import { updateContentType } from '../../../../store/features/contentSlice/contentSlice.types'

import Button from '../../../ui/button/Button'

import iconDownload from '../../../../assets/icons/icon-download-dark.svg'
import iconMove from '../../../../assets/icons/icon-move-dark.svg'
import iconRename from '../../../../assets/icons/icon-edit-dark.svg'
import iconStar from '../../../../assets/icons/icon-star-dark.svg'
import iconTrash from '../../../../assets/icons/icon-trash-dark.svg'

const ElementsContextMenu = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const content = useSelector(state => state.content.loadedContent)

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

    return <>
        <Button $variant='quaternary' onClick={handleDownload}>
            <img src={iconDownload} alt='Pobierz' />

            Pobierz
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleMove}>
            <img src={iconMove} alt='Przenieś do' />

            Przenieś do...
        </Button>

        <Button $variant='quaternary' onClick={handleRename} disabled={selected.folders.length + selected.files.length > 1}>
            <img src={iconRename} alt='Zmień nazwę' />

            Zmień nazwę...
        </Button>

        <Button $variant='quaternary' onClick={handleMarkWithStar}>
            <img src={iconStar} alt='Oznacz gwiazdką' />

            Oznacz gwiazdką
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleDelete}>
            <img src={iconTrash} alt='Usuń' />

            Usuń
        </Button>
    </>
}

export default ElementsContextMenu