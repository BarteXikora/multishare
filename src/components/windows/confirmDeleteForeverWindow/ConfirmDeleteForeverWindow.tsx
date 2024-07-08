/** 
 * Confirm delete forever window
 * 
 * The window is shown when user wants to delete elements forever (from the trash). It asks if the
 * user is sure and allows to delte files forever. 
**/

import { useSelector, useDispatch } from '../../../store/store'
import { deleteForever } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import Button from '../../ui/button/Button'
import ElementsPills from '../../elements/elementsPills/ElementsPills'
import { IconTrash } from '../../ui/icon/Icons'

const ConfirmDeleteForeverWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

    // Handling elements deleting forever:
    const handleDeleteForever = () => {
        dispatch(deleteForever({ folders: selected.folders, files: selected.files }))
        dispatch(closeWindow())
    }

    // Rendering the component:
    return <>
        <section>
            <h2>{`Czy na pewno chcesz trwale usunąć ${selectedCnt === 1 ? 'wybrany element' : 'wybrane elementy'}?`}</h2>

            <p>Usuniętych trwale elementów nie będzie można odzyskać.</p>
        </section>

        {
            selectedCnt === 0 && <div className='error'>Niczego nie zaznaczono.</div>
        }

        {
            selectedCnt > 0 && <section>
                <h3>{selectedCnt === 1 ? 'Wybrany element' : 'Wybrane elementy'}:</h3>

                <ElementsPills elements={{ folders: selected.folders, files: selected.files }} />
            </section>
        }

        <section className="actions">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())} className='no-mobile-button'>
                Anuluj
            </Button>

            {
                selectedCnt > 0 && <Button $variant='wrong' onClick={handleDeleteForever}>
                    <IconTrash />

                    Tak, usuń trwale
                </Button>
            }
        </section>
    </>
}

export default ConfirmDeleteForeverWindow