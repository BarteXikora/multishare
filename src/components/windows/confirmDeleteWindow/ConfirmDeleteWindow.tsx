import { useSelector, useDispatch } from '../../../store/store'
import { moveToTrash } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import Button from '../../ui/button/Button'
import ElementsPills from '../../elements/elementsPills/ElementsPills'
import { IconTrash } from '../../ui/icon/Icons'

const ConfirmDeleteWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

    const handleMoveToTrash = () => {
        dispatch(moveToTrash({ view: { folders: selected.folders, files: selected.files }, contained: { folders: [], files: [] } }))
        dispatch(closeWindow())
    }

    return <>
        <section>
            <h2>{`Czy na pewno chcesz przenieść ${selectedCnt === 1 ? 'wybrany element' : 'wybrane elementy'} do kosza?`}</h2>

            <p>Elementy znajdujące się w koszu będą automatycznie usuwane na zawsze po upływie 30 dni.</p>
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
                selectedCnt > 0 && <Button $variant='wrong' onClick={handleMoveToTrash}>
                    <IconTrash />

                    Tak, przenieś do kosza
                </Button>
            }
        </section>
    </>
}

export default ConfirmDeleteWindow