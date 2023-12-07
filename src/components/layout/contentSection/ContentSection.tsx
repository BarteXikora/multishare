import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

const __currentContent = {
    folders: [
        { id: 123456, displayName: 'Pozostałe' },
        { id: 123457, displayName: 'Nieobrobione - głównie do kosza', star: true }
    ],
    files: [
        { id: 98765, displayName: 'Wycieczka na rowery 1', extension: 'PNG' },
        { id: 98766, displayName: 'Wycieczka na rowery 2', extension: 'JPG', star: true }
    ]
}

const ContentSection = () => {
    return <StyledContentSection>
        <section className='folders-section'>
            <h2>Foldery:</h2>

            <div className="content">
                {
                    __currentContent.folders.map(folder => {
                        return <Folder
                            key={folder.id}
                            displayName={folder.displayName}
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
                    __currentContent.files.map(file => {
                        return <File
                            key={file.id}
                            displayName={file.displayName}
                            extension={file.extension}
                            isStar={file.star || false}
                        />
                    })
                }
            </div>
        </section>
    </StyledContentSection>
}

export default ContentSection