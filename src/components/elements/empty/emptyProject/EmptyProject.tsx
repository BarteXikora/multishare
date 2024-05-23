import Button from '../../../ui/button/Button'
import { useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import imgLogo from '../../../../assets/images/img-logo-icon-dark.svg'
import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconAddFolder from '../../../../assets/icons/icon-new-folder.svg'

const EmptyProject = () => {
    const dispatch = useDispatch()

    const handleNewFolder = () => {
        dispatch(showWindow({ title: 'Utwórz nowy folder', content: 'CREATE_NEW_FOLDER' }))
    }

    const handleUpload = () => {
        dispatch(showWindow({ title: 'Prześlij pliki', content: 'UPLOAD' }))
    }

    return <>
        <div className="image">
            <img src={imgLogo} alt='Logo multishare' />
        </div>

        <div className="info">
            <h2>Ten projekt nie zawiera żadnych plików, ani folderów!</h2>

            <p>Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.</p>

            <div className="actions">
                <Button onClick={handleUpload}>
                    <img src={iconUpload} alt='Wyślij pliki na dysk' />

                    Prześlij pliki
                </Button>

                <Button className='back-button' onClick={handleNewFolder}>
                    <img src={iconAddFolder} alt='Utwórz folder' />

                    Utwórz folder
                </Button>
            </div>
        </div>
    </>
}

export default EmptyProject