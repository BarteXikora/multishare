/** 
 * Can not open in trash window
 * 
 * This windows is shown when the user tries to open a file or folder inside the trash. It allows
 * to restore the element.
**/

import { useSelector, useDispatch } from '../../../store/store'
import { restoreFromTrash } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import { restoreFromTrashType } from '../../../store/features/contentSlice/reducers/restoreFromTrash/restoreFromTrash'

import Button from '../../ui/button/Button'
import { IconRestore } from '../../ui/icon/Icons'

const CanNotOpenInTrashWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    // Handling restoring of the selected element:
    const handleRestoreFromTrash = () => {
        const data: restoreFromTrashType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: 0 } }),
            files: selected.files.map(f => { return { id: f, parentFolder: 0 } })
        }

        dispatch(restoreFromTrash(data))
        dispatch(closeWindow())
    }

    // Rendering the component:
    return <>
        <section>
            <h2>Nie można wyświetlić tego elementu, gdyż znajduje się on w koszu.</h2>

            <p>Aby wyświetlić ten element należy najpierw go przywrócić.</p>
        </section>

        <section className="actions">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())} className='no-mobile-button'>
                Anuluj
            </Button>

            <Button onClick={handleRestoreFromTrash}>
                <IconRestore />

                Przywróć ten element
            </Button>
        </section>
    </>
}

export default CanNotOpenInTrashWindow