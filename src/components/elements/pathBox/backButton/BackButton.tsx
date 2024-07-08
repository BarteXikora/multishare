/** 
 * Go back button
 * 
 * It is rendered in the PathBox component. Shows a button the user can use to go back
 * one step in the folders tree. If location is set to a home folder, the component shows
 * the home icon and do nothing on click.
**/

import useGoBack from '../../../../hooks/useGoBack/useGoBack'

import StyledBackButton from './BackButton.styles'
import AnimatedBackButton from './BackButton.animation'
import { IconBack, IconHome } from '../../../ui/icon/Icons'

// Rendering the component:
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