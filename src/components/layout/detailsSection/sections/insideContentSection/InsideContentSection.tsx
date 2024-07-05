/** 
 * Inside content section
 * 
 * Used in the SingleFolderSection component. It displays information about selected folders 
 * inside content (count of contained folders and files).
**/

import StyledInsideContentSection from './InsideContentSection.styles'

// Inside content section props types:
type InsideContentSectionType = {
    folders: number
    files: number
}

const InsideContentSection = ({ folders, files }: InsideContentSectionType) => {

    // Rendering the component:
    return <StyledInsideContentSection>
        <h4>Zawartość:</h4>

        {
            folders + files === 0 ?
                <div className="info-pill info-pill-zero">Pusty folder</div>

                :

                <>
                    <div className={`info-pill ${folders === 0 ? 'info-pill-zero' : ''}`}>
                        <span>Podfoldery:</span>

                        {folders}
                    </div>

                    <div className={`info-pill ${files === 0 ? 'info-pill-zero' : ''}`}>
                        <span>Pliki:</span>

                        {files}
                    </div>
                </>
        }
    </StyledInsideContentSection>
}

export default InsideContentSection