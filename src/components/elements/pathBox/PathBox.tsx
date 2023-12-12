import StyledPathBox from './PathBox.styles'
import BackButton from './backButton/BackButton'
import Path from './path/Path'
import CurrentFolderButton from './currentFolderButon/CurrentFolderButton'

const __currentPath = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery 2023']

const PathBox = () => {
    return <StyledPathBox>
        <BackButton isHome={__currentPath.length <= 1} />

        <Path path={__currentPath} />

        <CurrentFolderButton path={__currentPath} />
    </StyledPathBox>
}

export default PathBox