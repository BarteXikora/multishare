import StyledLoadingContent from './LoadingContent.styles'
import Spinner from '../../ui/spinner/Spinner'

const LoadingContent = () => {
    return <StyledLoadingContent>
        <div className="icon">
            <Spinner />
        </div>

        <div className="info">
            <h2>Wczytywanie...</h2>
        </div>
    </StyledLoadingContent>
}

export default LoadingContent