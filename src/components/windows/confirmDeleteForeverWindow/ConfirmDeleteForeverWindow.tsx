import { useSelector, useDispatch } from '../../../store/store'
import { deleteForever } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledConfirmDeleteForeverWindow from './ConfirmDeleteForeverWindow.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconTrash from '../../../assets/icons/icon-trash-full.svg'

const ConfirmDeleteForeverWindow = () => {
    const dispatch = useDispatch()

    const content = useSelector(state => state.content.loadedContent)
    const selected = useSelector(state => state.content.selected)
    const selectedCnt = selected.folders.length + selected.files.length

    const handleDeleteForever = () => {
        dispatch(deleteForever({ folders: selected.folders, files: selected.files }))
        dispatch(closeWindow())
    }

    return <StyledConfirmDeleteForeverWindow>
        <section className="info-section">
            <h2>{`Czy na pewno chcesz trwale usunąć ${selectedCnt === 1 ? 'wybrany element' : 'wybrane elementy'}?`}</h2>

            <p>Usunięte trwale elementów nie będzie można odzyskać.</p>
        </section>

        {
            selectedCnt === 0 && <h3 className='error'>Niczego nie zaznaczono.</h3>
        }

        {
            selectedCnt > 0 && <section className="details-section">
                <h3>{selectedCnt === 1 ? 'Wybrany element' : 'Wybrane elementy'}:</h3>

                <div className="elements">
                    {
                        selected.folders.map(folder => <div key={folder} className="element">
                            <img src={iconFolder} alt='Folder' />

                            {
                                content.status === 'READY' && content.trash.view.folders.find(f => f.id === folder)?.name
                            }
                        </div>)
                    }

                    {
                        selected.files.map(file => <div key={file} className="element">
                            {
                                content.status === 'READY' && content.trash.view.files.find(f => f.id === file)?.name
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
                selectedCnt > 0 && <Button $variant='wrong' onClick={handleDeleteForever}>
                    <img src={iconTrash} alt='Kosz' />

                    Tak, usuń trwale
                </Button>
            }
        </section>
    </StyledConfirmDeleteForeverWindow>
}

export default ConfirmDeleteForeverWindow