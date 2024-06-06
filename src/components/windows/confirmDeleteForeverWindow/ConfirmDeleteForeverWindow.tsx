import { useSelector, useDispatch } from '../../../store/store'
import { deleteForever } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import Button from '../../ui/button/Button'
import ElementsPills from '../../elements/elementsPills/ElementsPills'

import iconTrash from '../../../assets/icons/icon-trash-full.svg'

const ConfirmDeleteForeverWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

    const handleDeleteForever = () => {
        dispatch(deleteForever({ folders: selected.folders, files: selected.files }))
        dispatch(closeWindow())
    }

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
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>
                Anuluj
            </Button>

            {
                selectedCnt > 0 && <Button $variant='wrong' onClick={handleDeleteForever}>
                    <img src={iconTrash} alt='Kosz' />

                    Tak, usuń trwale
                </Button>
            }
        </section>
    </>
}

export default ConfirmDeleteForeverWindow