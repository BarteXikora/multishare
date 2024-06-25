import { useDispatch } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

import StyledFolderNotFound from './FolderNotFound.styles'
import Button from '../../ui/button/Button'
import { IconBack } from '../../ui/icon/Icons'

import imgFolderNotFound from '../../../assets/images/img-folder-not-found.svg'

const FolderNotFound = () => {
    const dispatch = useDispatch()

    return <StyledFolderNotFound>
        <div className="image">
            <img src={imgFolderNotFound} alt='Nie znaleziono folderu' />
        </div>

        <div className="info">
            <h2>Nie znaleziono folderu.</h2>

            <p>Wybrany folder nie istnieje. Mógł on zostać usunięty, lub edytowany.</p>

            <Button $variant='secondary' className='back-button' onClick={() => dispatch(setTreeLocation(-1))}>
                <IconBack />

                Wróć
            </Button>
        </div>
    </StyledFolderNotFound>
}

export default FolderNotFound