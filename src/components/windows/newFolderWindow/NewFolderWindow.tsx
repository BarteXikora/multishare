import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledNewFolderWindow from './NewFolderWindow.styles'
import InputButton from '../../ui/inputButton/InputButton'

import iconSeparator from '../../../assets/icons/icon-arrow-right-dark.svg'
import iconNewFolder from '../../../assets/icons/icon-new-folder.svg'

const NewFolderWindow = () => {
    const projectName = useSelector(state => state.project.selectedProject?.name)
    const path = useSelector(state => state.content.currentPath)
    const currentFolders = useSelector(state => state.content.currentFolder.folders)

    const [folderName, setFolderName] = useState<string>('Nowy folder')
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

    }, [folderName])

    const handleCreateFolder = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return <StyledNewFolderWindow>
        <section className="path-section">
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

        <section className="action-section">
            <InputButton
                buttonContent={<><img src={iconNewFolder} alt='Utwórz nowy folder' /> Utwórz folder</>}
                inputState={[folderName, setFolderName]}
                onSubmit={handleCreateFolder}
                buttonOptions={{ $disabled: !!validation }}
                autoSelect
            />

            {validation && <div className="validation-info">{validation}</div>}
        </section>
    </StyledNewFolderWindow>
}

export default NewFolderWindow