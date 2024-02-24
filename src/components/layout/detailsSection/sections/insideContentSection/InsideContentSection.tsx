import StyledInsideContentSection from './InsideContentSection.styles'

type InsideContentSectionType = {
    folders: number
    files: number
}

const InsideContentSection = ({ folders, files }: InsideContentSectionType) => {
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