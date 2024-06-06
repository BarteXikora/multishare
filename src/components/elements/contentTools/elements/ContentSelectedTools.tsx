import { useDispatch, useSelector } from '../../../../store/store'
import { downloadElements, updateContent } from '../../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { updateContentType } from '../../../../store/features/contentSlice/contentSlice.types'

import Button from '../../../ui/button/Button'

import iconDownload from '../../../../assets/icons/icon-download.svg'
import iconMove from '../../../../assets/icons/icon-move-dark.svg'
import iconEdit from '../../../../assets/icons/icon-edit-dark.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'
import iconTrash from '../../../../assets/icons/icon-trash-full.svg'

const ContentSelectedTools = () => {
    const dispatch = useDispatch()

    const content = useSelector(state => state.content.loadedContent)
    const selected = useSelector(state => state.content.selected)

    const handleDownload = () => {
        dispatch(downloadElements({
            type: 'REQ',
            folders: selected.folders,
            files: selected.files
        }))
    }

    const handleDelete = () => dispatch(showWindow('CONFIRM_DELETE'))

    const handleRename = () => dispatch(showWindow('RENAME'))

    const handleMove = () => dispatch(showWindow('MOVE'))

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
    }

    return <div className="tools-buttons">
        <Button onClick={handleDownload}>
            <img src={iconDownload} alt="Pobierz" />

            <span className="label">Pobierz</span>
        </Button>

        <Button $variant='secondary' onClick={handleMove}>
            <img src={iconMove} alt="Przenieś do..." />

            <span className="label">Przenieś do...</span>
        </Button>

        <Button
            $variant='secondary'
            disabled={selected.folders.length + selected.files.length > 1}
            onClick={handleRename}
        >
            <img src={iconEdit} alt="Zmień nazwę..." />

            <span className="label">Zmień nazwę...</span>
        </Button>

        <Button $variant='secondary' onClick={handleMarkWithStar}>
            <img src={iconStar} alt="Oznacz gwiazdką" />

            <span className="label">Oznacz gwiazdką</span>
        </Button>

        <Button $variant='wrong' onClick={handleDelete}>
            <img src={iconTrash} alt="Usuń" />

            <span className="label">Usuń</span>
        </Button>
    </div>
}

export default ContentSelectedTools