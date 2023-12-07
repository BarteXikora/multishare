import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'

const __currentContent = {
    folders: [
        { id: 123456, displayName: 'Pozostałe' },
        { id: 123457, displayName: 'Nieobrobione - głównie do kosza', star: true }
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
        </section>
    </StyledContentSection>
}

export default ContentSection