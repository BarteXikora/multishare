import { useSelector, useDispatch } from '../../../store/store'
import { restoreFromTrash } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import { restoreFromTrashType } from '../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'

import Button from '../../ui/button/Button'

import iconRestore from '../../../assets/icons/icon-restore.svg'

const CanNotOpenInTrashWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
        dispatch(closeWindow())
    }

    return <>
        <section>
            <h2>Nie można wyświetlić tego elementu, gdyż znajduje się on w koszu.</h2>

            <p>Aby wyświetlić ten element należy najpierw go przywrócić.</p>
        </section>

        <section className="actions">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>
                Anuluj
            </Button>

            <Button onClick={handleRestoreFromTrash}>
                <img src={iconRestore} alt='Przywróć' />

                Przywróć ten element
            </Button>
        </section>
    </>
}

export default CanNotOpenInTrashWindow