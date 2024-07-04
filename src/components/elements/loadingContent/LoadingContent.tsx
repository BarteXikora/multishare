/** 
 * Loading content; displays loading spinner
**/

import StyledLoadingContent from './LoadingContent.styles'
import Spinner from '../../ui/spinner/Spinner'

type loadingContentType = {
    text?: string
}

const LoadingContent = ({ text }: loadingContentType) => {

    // Rendering the coponent:
    return <StyledLoadingContent>
        <div className="icon">
            <Spinner />
        </div>

        <div className="info">
            <h2>{text || 'Wczytywanie...'}</h2>
        </div>
    </StyledLoadingContent>
}

export default LoadingContent