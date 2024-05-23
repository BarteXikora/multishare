import { useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import useGoBack from '../../../../functions/useGoBack/useGoBack'

import imageEmptyFolder from '../../../../assets/images/img-empty-folder.svg'
import iconBack from '../../../../assets/icons/icon-back.svg'
import iconUpload from '../../../../assets/icons/icon-upload.svg'

const EmptyFolder = () => {
    const dispatch = useDispatch()
    const goBack = useGoBack()

    const handleUpload = () => {
        dispatch(showWindow({ title: 'Prześlij pliki', content: 'UPLOAD' }))
    }

    return <>
        <div className="image">
            <img src={imageEmptyFolder} alt="" />
        </div>

        <div className="info">
            <h2>Ten folder jest pusty!</h2>

            <p>Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.</p>

            <div className="actions">
                <Button $variant='secondary' className='back-button' onClick={() => goBack()}>
                    <img src={iconBack} alt='Cofnij się' />
                </Button>

                <Button onClick={handleUpload}>
                    <img src={iconUpload} alt='Prześlij pliki tutaj' />

                    Prześlij pliki
                </Button>
            </div>
        </div>
    </>
}

export default EmptyFolder