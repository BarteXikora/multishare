import StyledLoadingPage from './LoadingPage.styles'
import Spinner from '../../components/ui/spinner/Spinner'

const LoadingPage = () => {
    return <StyledLoadingPage>
        <div className="spinner">
            <Spinner />
        </div>

        <h2>Wczytywanie...</h2>
    </StyledLoadingPage>
}

export default LoadingPage