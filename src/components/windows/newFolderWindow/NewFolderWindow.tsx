import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledNewFolderWindow from './NewFolderWindow.styles'
import InputButton from '../../ui/inputButton/InputButton'

import iconSeparator from '../../../assets/icons/icon-arrow-right-dark.svg'
import iconNewFolder from '../../../assets/icons/icon-new-folder.svg'
import { addFolder } from '../../../store/features/contentSlice/contentSlice'
import { folderType } from '../../../store/features/contentSlice/contentSlice.types'

const NewFolderWindow = () => {
    const dispatch = useDispatch()

    const projectName = useSelector(state => state.project.selectedProject?.name)
    const path = useSelector(state => state.content.currentPath)
    const currentFolders = useSelector(state => state.content.currentFolder.folders)

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

    useEffect(() => {
        let names: string[] = []
        currentFolders.forEach(f => names.push(f.name))

        setUsedFolderNames(names)

    }, [currentFolders])

    useEffect(() => {
        let currentValidation: string | false = false

        if (folderName.length === 0) currentValidation = 'Należy podać nazwę folderu.'
        else if (folderName.length > 50) currentValidation = 'Wybrana nazwa jest zbyt długa.'
        else if (usedFolderNames.includes(folderName)) currentValidation = 'Wybrana nazwa jest już zajęta.'

        setValidation(currentValidation)

    }, [folderName, usedFolderNames])

    const handleCreateFolder = (e: React.FormEvent) => {
        e.preventDefault()
        if (validation) return

        const newFolder: folderType = {
            id: -2,
            parentFolder: path.length > 0 ? path[path.length - 1].id : -1,
            name: folderName,
            details: {},
            star: false
        }

        dispatch(addFolder(newFolder))
        dispatch(closeWindow())
    }

    return <StyledNewFolderWindow>
        <section>
            <h2>Utwórz nowy folder w:</h2>

            <div className='path'>
                <span>{getShortenName(projectName || '', 30)}</span>

                {
                    path.length > 1 && <>
                        <img src={iconSeparator} alt='/' />

                        <span>...</span>
                    </>
                }

                {
                    path.length > 0 && <>
                        <img src={iconSeparator} alt='/' />

                        <span>{getShortenName(path[path.length - 1].name, 30)}</span>
                    </>
                }
            </div>
        </section>

        <section>
            <InputButton
                buttonContent={<><img src={iconNewFolder} alt='Utwórz nowy folder' /> Utwórz folder</>}
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