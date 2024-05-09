import Button from '../../../ui/button/Button'
import { useDispatch, useSelector } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { restoreFromTrash } from '../../../../store/features/contentSlice/contentSlice'
import { restoreFromTrashType } from '../../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'

import iconDownload from '../../../../assets/icons/icon-download.svg'
import iconMove from '../../../../assets/icons/icon-move.svg'
import iconEdit from '../../../../assets/icons/icon-edit-dark.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'
import iconTrash from '../../../../assets/icons/icon-trash-full.svg'
import iconRestore from '../../../../assets/icons/icon-restore.svg'
import iconDetails from '../../../../assets/icons/icon-details.svg'

const SelectedTools = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const displayType = useSelector(state => state.content.displayType)

    const handleDelete = () => {
        dispatch(showWindow({
            title: 'Czy na pewno chcesz przenieść wybrane elementy do kosza?',
            content: 'CONFIRM_DELETE'
        }))
    }

    const handleRename = () => {
        // alert(selected.folders.length + selected.files.length !== 1 ? 'Błąd' : selected.folders.length === 1 ? 'Folder' : 'Plik')

        dispatch(showWindow({
            title: 'Zmień nazwę',
            content: 'RENAME'
        }))
    }

    const handleMove = () => {
        dispatch(showWindow({
            title: 'Przenieś do...',
            content: 'MOVE'
        }))
    }

    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
    }

    const handleDeleteForever = () => {
        dispatch(showWindow({
            title: 'Czy na pewno chcesz trwale usunąć wybrane elementy?',
            content: 'CONFIRM_DELETE_FOREVER'
        }))
    }

    return <section className="selected-tools">
        {
            displayType !== 'TRASH' && <div className="tools-buttons">
                <Button>
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

                <Button $variant='secondary'>
                    <img src={iconStar} alt="Oznacz gwiazdką" />

                    <span className="label">Oznacz gwiazdką</span>
                </Button>

                <Button $variant='wrong' onClick={handleDelete}>
                    <img src={iconTrash} alt="Usuń" />

                    <span className="label">Usuń</span>
                </Button>
            </div>
        }

        {
            displayType === 'TRASH' && <div className="tools-buttons">
                <Button onClick={handleRestoreFromTrash}>
                    <img src={iconRestore} alt="Przywróć..." />

                    <span className="label">Przywróć...</span>
                </Button>

                <Button $variant='wrong' onClick={handleDeleteForever}>
                    <img src={iconTrash} alt="Usuń" />

                    <span className="label">Usuń na zawsze</span>
                </Button>
            </div>
        }

        <Button className='details-button' onClick={() => dispatch(toggle())}>
            <img src={iconDetails} alt="Pokaż szczegóły" />

            <span className="label">Sczegóły</span>
        </Button>
    </section>
}

export default SelectedTools