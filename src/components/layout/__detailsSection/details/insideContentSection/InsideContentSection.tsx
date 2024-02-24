import { contentType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

const InsideContentSection = ({ content }: { content: contentType }) => {
    if (content.type !== 'FOLDER') return null

    const { data } = content

    return <div className="section section-inside-content">
        <h4>Zawartość:</h4>

        {
            data.insideContent.folders + data.insideContent.files === 0 ?
                <div className="info-pill info-pill-zero">Pusty folder</div>
                :
                <>
                    <div className={`info-pill ${data.insideContent.folders > 0 ? '' : 'info-pill-zero'}`}>
                        <span>Podfoldery:</span>

                        {data.insideContent.folders}
                    </div>

                    <div className={`info-pill ${data.insideContent.files > 0 ? '' : 'info-pill-zero'}`}>
                        <span>Pliki:</span>

                        {data.insideContent.files}
                    </div>
                </>
        }
    </div>
}

export default InsideContentSection