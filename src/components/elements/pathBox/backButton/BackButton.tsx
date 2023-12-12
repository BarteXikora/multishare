import Button from '../../../ui/button/Button'

import iconBack from '../../../../assets/icons/icon-back.svg'
import iconHome from '../../../../assets/icons/icon-home.svg'

const BackButton = ({ isHome }: { isHome: boolean }) => {
    return <Button $variant='tertiary'>
        {
            isHome ?
                <img src={iconHome} alt="Folder główny" />
                :
                <img src={iconBack} alt="Cofnij" />
        }
    </Button>
}

export default BackButton