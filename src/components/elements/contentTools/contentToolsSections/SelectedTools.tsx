import Button from '../../../ui/button/Button'
import ContentSelectedTools from '../elements/ContentSelectedTools'

import { useDispatch, useSelector } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { restoreFromTrash } from '../../../../store/features/contentSlice/contentSlice'
import { restoreFromTrashType } from '../../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'

import iconTrash from '../../../../assets/icons/icon-trash-full.svg'
import iconRestore from '../../../../assets/icons/icon-restore.svg'
import iconDetails from '../../../../assets/icons/icon-details.svg'

const SelectedTools = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const displayType = useSelector(state => state.content.displayType)

    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
    }

    const handleDeleteForever = () => dispatch(showWindow('CONFIRM_DELETE_FOREVER'))

    return <section className="selected-tools">
        {
            displayType !== 'TRASH' && <ContentSelectedTools />
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