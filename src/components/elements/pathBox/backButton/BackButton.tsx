import StyledBackButton from './BackButton.styles'

import iconBack from '../../../../assets/icons/icon-back.svg'
import iconHome from '../../../../assets/icons/icon-home.svg'

const BackButton = ({ isHome }: { isHome: boolean }) => {
    return <StyledBackButton $variant='tertiary'>
        {
            isHome ?
                <img src={iconHome} alt="Folder główny" />
                :
                <img src={iconBack} alt="Cofnij" />
        }
    </StyledBackButton>
}

export default BackButton