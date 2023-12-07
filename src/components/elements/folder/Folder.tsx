import StyledFolder from './Folder.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-project.svg'
import iconStar from '../../../assets/icons/icon-star-color.svg'
import iconKebab from '../../../assets/icons/icon-kebab.svg'

type FolderProps = {
    displayName: string
    isStar: boolean
}

const Folder = ({ displayName, isStar }: FolderProps) => {
    return <StyledFolder $variant='secondary' $size='big'>
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