import { Fragment, useState } from 'react'
import { useSelector } from '../../../store/store'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledNewFolderWindow from './NewFolderWindow.styles'
import InputButton from '../../ui/inputButton/InputButton'

import iconSeparator from '../../../assets/icons/icon-arrow-right-dark.svg'
import iconNewFolder from '../../../assets/icons/icon-new-folder.svg'

const NewFolderWindow = () => {
    const projectName = useSelector(state => state.project.selectedProject?.name)
    const path = useSelector(state => state.content.currentPath)

    const [folderName, setFolderName] = useState<string>('Nowy folder')

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
                autoSelect
            />
        </section>
    </StyledNewFolderWindow>
}

export default NewFolderWindow