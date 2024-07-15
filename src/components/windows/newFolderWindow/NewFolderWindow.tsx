/** 
 * New folder window
 * 
 * This windows is shown when user is creating a new folder. It displays folder name input and
 * the submit button. It prepares the new folder name, checks if name is not taken and 
 * allows to create new folder.
**/

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import getShortenName from '../../../functions/getShortenName/getShortenName'
import { addFolder } from '../../../store/features/contentSlice/contentSlice'
import { folderType } from '../../../store/features/contentSlice/contentSlice.types'
import { ELEMENT_NAME_LENGTH } from '../../../store/features/contentSlice/contentSlice.types'

import StyledNewFolderWindow from './NewFolderWindow.styles'
import InputButton from '../../ui/inputButton/InputButton'
import { IconNewFolder, IconArrowRight } from '../../ui/icon/Icons'

const NewFolderWindow = () => {
    const dispatch = useDispatch()

    const projectName = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject.name : 'Folder główny')
    const path = useSelector(state => state.content.currentPath)
    const currentFolders = useSelector(state => state.content.currentFolder.folders)

    // Handling new folder name preeparation. New folder name should be "Nowy folder", but if the name is taken it adds
    // a first free number after the name:
    const getSuggestedFolerName = (): string => {
        if (currentFolders.filter(f => f.name === 'Nowy folder').length === 0) return 'Nowy folder'
        else {
            const defaultNamedFolders = currentFolders.filter(f => /Nowy folder \(\d+\)/.test(f.name))
            const defaultNamedFoldersNumbers = defaultNamedFolders.map(f => Number(f.name.substring(13, f.name.length - 1).split(')')[0]))

            let max = 0

            defaultNamedFoldersNumbers.forEach(f => f > max ? max = f : null)

            return 'Nowy folder (' + Number(max + 1) + ')'
        }
    }

    const [folderName, setFolderName] = useState<string>(getSuggestedFolerName())
    const [usedFolderNames, setUsedFolderNames] = useState<string[]>([])
    const [validation, setValidation] = useState<string | false>(false)

    // Preparing taken folders names list:
    useEffect(() => {
        let names: string[] = []
        currentFolders.forEach(f => names.push(f.name))

        setUsedFolderNames(names)

    }, [currentFolders])

    // Validating current folder name. Function chcecks it length and if it is not taken:
    useEffect(() => {
        let currentValidation: string | false = false
        let folderNameTrimmed = folderName.trim()

        if (folderNameTrimmed.length === 0)
            currentValidation = 'Należy podać nazwę folderu.'

        else if (folderNameTrimmed.length < ELEMENT_NAME_LENGTH.MIN)
            currentValidation = `Wybrana nazwa jest zbyt krótka (minimum ${ELEMENT_NAME_LENGTH.MIN} znaków).`

        else if (folderNameTrimmed.length > ELEMENT_NAME_LENGTH.MAX)
            currentValidation = `Wybrana nazwa jest zbyt długa (maksymalnie ${ELEMENT_NAME_LENGTH.MAX} znaków).`

        else if (usedFolderNames.includes(folderNameTrimmed))
            currentValidation = 'Wybrana nazwa jest już zajęta.'

        setValidation(currentValidation)

    }, [folderName, usedFolderNames])

    // Handling new folder creation:
    const handleCreateFolder = (e: React.FormEvent) => {
        e.preventDefault()
        if (validation) return

        const newFolder: folderType = {
            id: -2,
            parentFolder: path.length > 0 ? path[path.length - 1].id : -1,
            name: folderName.trim(),
            details: {},
            star: false
        }

        dispatch(addFolder(newFolder))
        dispatch(closeWindow())
    }

    // Renderng the component:
    return <StyledNewFolderWindow>
        <section>
            <h2>Utwórz nowy folder w:</h2>

            <div className='path'>
                <span>{getShortenName(projectName || '', 30)}</span>

                {
                    path.length > 1 && <>
                        <IconArrowRight $color='dark' />

                        <span>...</span>
                    </>
                }

                {
                    path.length > 0 && <>
                        <IconArrowRight $color='dark' />

                        <span>{getShortenName(path[path.length - 1].name, 30)}</span>
                    </>
                }
            </div>
        </section>

        <section>
            <InputButton
                buttonContent={<><IconNewFolder /> Utwórz folder</>}
                inputState={[folderName, setFolderName]}
                onSubmit={handleCreateFolder}
                buttonOptions={{ disabled: !!validation }}
                autoSelect
            />
        </section>

        <section className="info-box">
            {validation && <span className="error">{validation}</span>}
        </section>
    </StyledNewFolderWindow>
}

export default NewFolderWindow