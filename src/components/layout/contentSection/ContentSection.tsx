import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

import __picture0 from '../../../assets/__files/picture 0.jpg'
import __picture1 from '../../../assets/__files/picture 1.jpg'
import __picture2 from '../../../assets/__files/picture 2.jpg'

const __currentContent = {
    folders: [
        { id: 123456, displayName: 'Pozostałe' },
        { id: 123457, displayName: 'Nieobrobione - głównie do kosza', star: true }
    ],
    files: [
        {
            id: 98765,
            displayName: 'Wycieczka na rowery 1',
            extension: 'PNG',
            preview: __picture0
        }, {
            id: 98766,
            displayName: 'Wycieczka na rowery 2',
            extension: 'JPG',
            preview: __picture1,
            star: true
        }, {
            id: 98767,
            displayName: 'Wycieczka na rowery 3',
            extension: 'JPG',
            preview: __picture2
        }, {
            id: 98768,
            displayName: 'Wycieczka na rowery 4',
            extension: 'JPG'
        }
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
                            preview={file.preview || false}
                            isStar={file.star || false}
                        />
                    })
                }
            </div>
        </section>
    </StyledContentSection>
}

export default ContentSection