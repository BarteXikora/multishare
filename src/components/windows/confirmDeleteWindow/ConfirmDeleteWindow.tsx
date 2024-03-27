import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledConfirmDeleteWindow from './ConfirmDeleteWindow.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconTrash from '../../../assets/icons/icon-trash-full.svg'

const ConfirmDeleteWindow = () => {
    const dispatch = useDispatch()

    const content = useSelector(state => state.content.loadedContent)
    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

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

                <div className="elements">
                    {
                        selected.folders.map(folder => <div className="element">
                            <img src={iconFolder} alt='Folder' />

                            {
                                content.status === 'READY' && content.content.folders.filter(f => f.id === folder)[0]?.name
                            }
                        </div>)
                    }

                    {
                        selected.files.map(file => <div className="element">
                            {
                                content.status === 'READY' && content.content.files.filter(f => f.id === file)[0]?.name
                            }
                        </div>)
                    }
                </div>
            </section>
        }

        <section className="actions-section">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>
                Anuluj
            </Button>

            {
                selectedCnt > 0 && <Button $variant='wrong'>
                    <img src={iconTrash} alt='Kosz' />

                    Tak, przenieś do kosza
                </Button>
            }
        </section>
    </StyledConfirmDeleteWindow>
}

export default ConfirmDeleteWindow