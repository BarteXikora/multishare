import { useSelector } from '../../../store/store'

import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

const ContentSection = () => {
    const currentContent = useSelector(state => state.content.currentFolder)

    return <StyledContentSection>
        <section className='folders-section'>
            <h2>Foldery:</h2>

            <div className="content">
                {
                    currentContent.folders.map(folder => {
                        return <Folder
                            key={folder.id}
                            displayName={folder.name}
                            isStar={folder.star || false}
                        />
                    })
                }
            </div>
        </section>

        <section className='files-section'>
            <h2>Pliki:</h2>

            <div className="content">
                {
                    currentContent.files.map(file => {
                        return <File
                            key={file.id}
                            displayName={file.name}
                            extension={file.extension}
                            preview={false}
                            isStar={file.star || false}
                        />
                    })
                }
            </div>
        </section>
    </StyledContentSection>
}

export default ContentSection