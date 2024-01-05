import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import { pathType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledPathBox from './PathBox.styles'
import BackButton from './backButton/BackButton'
import Path from './path/Path'
import CurrentFolderButton from './currentFolderButon/CurrentFolderButton'

import getShortenName from '../../../functions/getShortenName/getShortenName'

const MAX_FOLDER_NAME_LENGTH = 30

const PathBox = () => {
    const projectName = useSelector(state => state.content.projectName)
    const currentPath = useSelector(state => state.content.currentPath)

    const [shortenPath, setShortenPath] = useState<pathType>([])

    useEffect(() => {
        setShortenPath([
            { id: -1, name: getShortenName(projectName, MAX_FOLDER_NAME_LENGTH) },

            ...currentPath.map(pathElement => {
                return {
                    id: pathElement.id,
                    name: getShortenName(pathElement.name, MAX_FOLDER_NAME_LENGTH)
                }
            })
        ])

    }, [projectName, currentPath])

    return <StyledPathBox>
        <BackButton isHome={shortenPath.length <= 1} />

        <Path path={shortenPath} />

        <CurrentFolderButton path={shortenPath} />
    </StyledPathBox>
}

export default PathBox