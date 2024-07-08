/** 
 * Empty folder; information about no content in selected folder (except for home folder)
**/

import { useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import useGoBack from '../../../../hooks/useGoBack/useGoBack'

import Button from '../../../ui/button/Button'
import { IconBack, IconUpload } from '../../../ui/icon/Icons'

import imageEmptyFolder from '../../../../assets/images/img-empty-folder.svg'

const EmptyFolder = () => {
    const dispatch = useDispatch()
    const goBack = useGoBack()

    const handleUpload = () => dispatch(showWindow('UPLOAD'))

    return <>
        <div className="image">
            <img src={imageEmptyFolder} alt="" />
        </div>

        <div className="info">
            <h2>Ten folder jest pusty!</h2>

            <p>Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.</p>

            <div className="actions">
                <Button $variant='secondary' className='back-button' onClick={() => goBack()}>
                    <IconBack />
                </Button>

                <Button onClick={handleUpload}>
                    <IconUpload />

                    Prześlij pliki
                </Button>
            </div>
        </div>
    </>
}

export default EmptyFolder