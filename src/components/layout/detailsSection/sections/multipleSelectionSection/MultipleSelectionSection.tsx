/** 
 * Multiple selection section
 * 
 * Used in the MultipleDetails component. It shows information about the selection.
**/

import StyledInsideContentSection from '../insideContentSection/InsideContentSection.styles'

// Multiple selection section props types:
type MultipleSelectionSectionType = {
    folders: number
    files: number
}

const MultipleSelectionSection = ({ folders, files }: MultipleSelectionSectionType) => {

    // Rendering the component:
    return <StyledInsideContentSection>
        <h4>Zaznaczenie:</h4>

        <div className={`info-pill ${folders === 0 ? 'info-pill-zero' : ''}`}>
            <span>Foldery:</span>

            {folders}
        </div>

        <div className={`info-pill ${files === 0 ? 'info-pill-zero' : ''}`}>
            <span>Pliki:</span>

            {files}
        </div>
    </StyledInsideContentSection>
}

export default MultipleSelectionSection