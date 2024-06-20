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
    const filter = useSelector(state => state.content.filter)

    const [shortenPath, setShortenPath] = useState<pathType[]>([])

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

        {
            (filter.time || filter.type || filter.star) && <section className='warning-section'>
                <FilterWarning />
            </section>
        }
    </StyledPathBox>
}

export default PathBox