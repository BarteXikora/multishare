import useGoBack from '../../../../functions/useGoBack/useGoBack'

import StyledBackButton from './BackButton.styles'
import { IconBack, IconHome } from '../../../ui/icon/Icons'

const BackButton = ({ isHome }: { isHome: boolean }) => {
    const goBack = useGoBack()

    return <StyledBackButton $variant='tertiary' onClick={() => !isHome ? goBack() : null}>
        {
            isHome ?
                <IconHome $outline />
                :
                <IconBack />
        }
    </StyledBackButton>
}

export default BackButton