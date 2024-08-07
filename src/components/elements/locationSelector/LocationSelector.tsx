/** 
 * Location selector
 * 
 * It displays the projects folders in the form of the array. It allows user to quickly navigate in
 * the folders tree to select location. It gets the state as prop.
 * 
 * It also gets excluded ids array. Buttons for folders with ids fro the array are disabled, so user
 * can not choose them.
**/

import { useState } from 'react'
import { useSelector } from '../../../store/store'
import getCurrentContent from '../../../functions/getCurrentContent/getCurrentContent'
import { folderDisplayType } from '../../../store/features/contentSlice/contentSlice.types'
import getIsTouchScreen from '../../../hooks/useContentEvents/functions/getIsTouchScreen/getIsTouchScreen'

import StyledLocationSelector from './LocationSelector.styles'
import Button from '../../ui/button/Button'
import { IconHome, IconBack, IconFolder } from '../../ui/icon/Icons'

// Location selector props types:
type locationSelectorType = {
    selectionState: [number | null, (v: number | null) => void]
    excluded: number[]
}
type folderType = { id: number, name: string | null }

const LocationSelector = (props: locationSelectorType) => {
    const { selectionState, excluded } = props
    const [selectedFolder, setSelectedFolder] = selectionState

    const project = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject : null)
    const content = useSelector(state => state.content.loadedContent)

    const [currentFolder, setCurrentFolder] = useState<folderType>({ id: -1, name: null })

    const [body, setBody] = useState<folderDisplayType[]>(
        content.status === 'READY' ?
            getCurrentContent(content.content, currentFolder.id).folders : []
    )

    // Handling opening the folder on double click or touch:
    const handleOpenFolder = (id: number) => {
        if (content.status !== 'READY') return
        const found = content.content.folders.find(f => f.id === id)

        if (!found) setCurrentFolder({ id, name: null })
        else setCurrentFolder({ id, name: found.name })

        setBody(getCurrentContent(content.content, id).folders)
        setSelectedFolder(found || id === -1 ? id : null)
    }

    // Handling going back one step in the folders tree:
    const handleGoBack = () => {
        if (content.status !== 'READY') return

        const found = content.content.folders.find(f => f.id === currentFolder.id)
        let parent = undefined

        if (!found) setCurrentFolder({ id: -1, name: null })
        else {
            parent = content.content.folders.find(f => f.id === found.parentFolder)

            if (!parent) setCurrentFolder({ id: -1, name: null })
            else setCurrentFolder({ id: parent.id, name: parent.name })
        }

        setBody(getCurrentContent(content.content, parent?.id || -1).folders)
    }

    // Rendering the coponent:
    return <StyledLocationSelector>

        {/* Current path: */}
        <section className="path">
            {
                currentFolder.id === -1 ?
                    <Button $variant='tertiary'><IconHome $outline /></Button>
                    :
                    <Button $variant='tertiary' onClick={() => handleGoBack()}>
                        <IconBack />
                    </Button>
            }
            <Button
                $variant='quaternary'
                disabled={(currentFolder.name === null && currentFolder.id !== -1) || excluded.includes(currentFolder.id)}
                className={`path-button ${currentFolder.id === selectedFolder && 'path-button-active'}`}
                onClick={() => setSelectedFolder(currentFolder.id)}
            >
                {
                    currentFolder.id === -1 ?
                        <h3>{project?.name || 'Folder główny'}</h3>
                        :
                        currentFolder.name === null ?
                            <h3 className="wrong">Nie znaleziono folderu</h3>
                            :
                            <h3>{currentFolder.name}</h3>
                }
            </Button>
        </section>

        {/* Selected folder content: */}
        <section className="body">
            {
                body.map(folder => <Button
                    key={folder.id}
                    $variant='quaternary'
                    $active={folder.id === selectedFolder}
                    disabled={excluded.includes(folder.id)}
                    className='folder-button'
                    onClick={() => !getIsTouchScreen() && setSelectedFolder(folder.id)}
                    onDoubleClick={() => !getIsTouchScreen() && handleOpenFolder(folder.id)}
                    onTouchEnd={() => { setSelectedFolder(folder.id); handleOpenFolder(folder.id) }}
                >
                    <IconFolder $color='dark' />

                    {folder.name}
                </Button>)
            } {
                body.length === 0 && <p className='info'>Wybrany folder jest pusty.</p>
            }
        </section>
    </StyledLocationSelector>
}

export default LocationSelector