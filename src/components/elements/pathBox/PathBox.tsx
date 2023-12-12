import { useState, useEffect } from 'react'
import StyledPathBox from './PathBox.styles'
import BackButton from './backButton/BackButton'
import Path from './path/Path'
import CurrentFolderButton from './currentFolderButon/CurrentFolderButton'

import getShortenName from '../../../functions/getShortenName/getShortenName'

const MAX_FOLDER_NAME_LENGTH = 25

const __currentPath = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery 2023 - wyjazd']

const PathBox = () => {
    const [shortenPath, setShortenPath] = useState<string[]>([])

    useEffect(() => {
        setShortenPath(__currentPath.map(name => getShortenName(name, MAX_FOLDER_NAME_LENGTH)))

    }, [])

    return <StyledPathBox>
        <BackButton isHome={shortenPath.length <= 1} />

        <Path path={shortenPath} />

        <CurrentFolderButton path={shortenPath} />
    </StyledPathBox>
}

export default PathBox