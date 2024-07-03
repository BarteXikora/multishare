/** 
 * Empty project; information about no content in home folder
**/

import { useDispatch } from '../../../../store/store'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import { IconUpload, IconNewFolder } from '../../../ui/icon/Icons'

import imgLogo from '../../../../assets/images/img-logo-icon-dark.svg'

const EmptyProject = () => {
    const dispatch = useDispatch()

    const handleNewFolder = () => dispatch(showWindow('CREATE_NEW_FOLDER'))

    const handleUpload = () => dispatch(showWindow('UPLOAD'))

    return <>
        <div className="image">
            <img src={imgLogo} alt='Logo multishare' />
        </div>

        <div className="info">
            <h2>Ten projekt nie zawiera żadnych plików, ani folderów!</h2>

            <p>Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.</p>

            <div className="actions">
                <Button onClick={handleUpload}>
                    <IconUpload />

                    Prześlij pliki
                </Button>

                <Button className='back-button' onClick={handleNewFolder}>
                    <IconNewFolder />

                    Utwórz folder
                </Button>
            </div>
        </div>
    </>
}

export default EmptyProject