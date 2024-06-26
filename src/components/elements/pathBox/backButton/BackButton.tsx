import useGoBack from '../../../../functions/useGoBack/useGoBack'

import StyledBackButton from './BackButton.styles'
import AnimatedBackButton from './BackButton.animation'
import { IconBack, IconHome } from '../../../ui/icon/Icons'

const BackButton = ({ isHome }: { isHome: boolean }) => {
    const goBack = useGoBack()

    return <StyledBackButton $variant='tertiary' onClick={() => !isHome ? goBack() : null}>
        <AnimatedBackButton key={isHome ? 0 : 1}>
            {
                isHome ?
                    <IconHome $outline />
                    :
                    <IconBack />
            }
        </AnimatedBackButton>
    </StyledBackButton>
}

export default BackButton