import StyledPathBox from './PathBox.styles'
import BackButton from './backButton/BackButton'

const __currentPath = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery 2023']

const PathBox = () => {
    return <StyledPathBox>
        <BackButton isHome={__currentPath.length <= 1} />
    </StyledPathBox>
}

export default PathBox