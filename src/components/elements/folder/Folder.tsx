import { useDispatch } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

import StyledFolder from './Folder.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-project.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'
import iconKebab from '../../../assets/icons/icon-kebab.svg'

type FolderProps = {
    id: number
    displayName: string
    isStar: boolean
}

const Folder = ({ id, displayName, isStar }: FolderProps) => {
    const dispatch = useDispatch()

    return <StyledFolder
        $variant='secondary'
        $size='big'
        onDoubleClick={() => dispatch(setTreeLocation(id))}
    >
        <div className="folder-name">
            <img src={iconFolder} alt='Folder' />

            {displayName}
        </div>

        <div className="folder-options">
            {
                isStar && <div className="star">
                    <img src={iconStar} alt='Oznaczono gwiazdką' />
                </div>
            }

            <Button $variant='tertiary' $size='big'>
                <img src={iconKebab} alt='Wyświetl opcje' />
            </Button>
        </div>
    </StyledFolder>
}

export default Folder