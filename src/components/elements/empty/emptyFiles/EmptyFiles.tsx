import { useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'

import imageEmptyFolder from '../../../../assets/images/img-empty-folder.svg'
import iconUpload from '../../../../assets/icons/icon-upload.svg'

const EmptyFiles = () => {
    const dispatch = useDispatch()

    const handleUpload = () => dispatch(showWindow('UPLOAD'))

    return <>
        <div className="image">
            <img src={imageEmptyFolder} alt="" />
        </div>

        <div className="info">
            <h2>W tym projekcie nie ma żadnych plików!</h2>

            <p>Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.</p>

            <div className="actions">
                <Button onClick={handleUpload}>
                    <img src={iconUpload} alt='Prześlij pliki tutaj' />

                    Prześlij pliki
                </Button>
            </div>
        </div>
    </>
}

export default EmptyFiles