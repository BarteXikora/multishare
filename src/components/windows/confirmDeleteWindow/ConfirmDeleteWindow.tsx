import { useSelector, useDispatch } from '../../../store/store'
import { moveToTrash } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledConfirmDeleteWindow from './ConfirmDeleteWindow.styles'
import Button from '../../ui/button/Button'
import ElementsPills from '../../elements/elementsPills/ElementsPills'

import iconTrash from '../../../assets/icons/icon-trash-full.svg'

const ConfirmDeleteWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

    const handleMoveToTrash = () => {
        dispatch(moveToTrash({ view: { folders: selected.folders, files: selected.files }, contained: { folders: [], files: [] } }))
        dispatch(closeWindow())
    }

    return <StyledConfirmDeleteWindow>
        <section className="info-section">
            <h2>{`Czy na pewno chcesz przenieść ${selectedCnt === 1 ? 'wybrany element' : 'wybrane elementy'} do kosza?`}</h2>

            <p>Elementy znajdujące się w koszu będą automatycznie usuwane na zawsze po upływie 30 dni.</p>
        </section>

        {
            selectedCnt === 0 && <h3 className='error'>Niczego nie zaznaczono.</h3>
        }

        {
            selectedCnt > 0 && <section className="details-section">
                <h3>{selectedCnt === 1 ? 'Wybrany element' : 'Wybrane elementy'}:</h3>

                <ElementsPills elements={{ folders: selected.folders, files: selected.files }} />
            </section>
        }

        <section className="actions-section">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>
                Anuluj
            </Button>

            {
                selectedCnt > 0 && <Button $variant='wrong' onClick={handleMoveToTrash}>
                    <img src={iconTrash} alt='Kosz' />

                    Tak, przenieś do kosza
                </Button>
            }
        </section>
    </StyledConfirmDeleteWindow>
}

export default ConfirmDeleteWindow