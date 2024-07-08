/** 
 * Path box; renders the current path, or location title
 * 
 * Component is preparing the display path by adding the project name as the first element of
 * the path (home folder) and shorting folders names. Then it displays the path in the form
 * of buttons to navigate in the project folders tree.
 * 
 * It also shows filter warning info if any filter is set.
**/

import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import { pathType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledPathBox from './PathBox.styles'
import Title from './title/Title'
import BackButton from './backButton/BackButton'
import Path from './path/Path'
import CurrentFolderButton from './currentFolderButon/CurrentFolderButton'
import FilterWarning from '../filterWarning/FilterWarning'

import getShortenName from '../../../functions/getShortenName/getShortenName'

const MAX_FOLDER_NAME_LENGTH = 30

const PathBox = () => {
    const projectName = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject.name : 'Folder główny')
    const currentPath = useSelector(state => state.content.currentPath)
    const displayType = useSelector(state => state.content.displayType)

    const [shortenPath, setShortenPath] = useState<pathType[]>([])

    // Creating display path every time the stored path or project name is changing:
    useEffect(() => {
        setShortenPath([
            { id: -1, name: getShortenName(projectName, MAX_FOLDER_NAME_LENGTH) },

            ...currentPath.map(pathElement => {
                return {
                    id: pathElement.id,
                    name: getShortenName(pathElement.name, MAX_FOLDER_NAME_LENGTH),
                    notFound: pathElement.notFound
                }
            })
        ])

    }, [projectName, currentPath])

    // Rendering the coponent:
    return <StyledPathBox>
        <section className='main-section'>
            {
                displayType === 'TREE' ?
                    <>
                        <BackButton isHome={shortenPath.length <= 1} />

                        <Path path={shortenPath} />

                        <CurrentFolderButton path={shortenPath} />
                    </>

                    :

                    <Title displayType={displayType} />
            }
        </section>

        <section className='warning-section'>
            <FilterWarning />
        </section>
    </StyledPathBox>
}

export default PathBox