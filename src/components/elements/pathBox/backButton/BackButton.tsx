import StyledBackButton from './BackButton.styles'

import useGoBack from '../../../../functions/useGoBack/useGoBack'

import iconBack from '../../../../assets/icons/icon-back.svg'
import iconHome from '../../../../assets/icons/icon-home.svg'

const BackButton = ({ isHome }: { isHome: boolean }) => {
    const goBack = useGoBack()

    return <StyledBackButton $variant='tertiary' onClick={() => !isHome ? goBack() : null}>
        {
            isHome ?
                <img src={iconHome} alt="Folder główny" />
                :
                <img src={iconBack} alt="Cofnij" />
        }
    </StyledBackButton>
}

export default BackButton