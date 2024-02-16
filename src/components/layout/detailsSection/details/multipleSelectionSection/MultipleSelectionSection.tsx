import { contentType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

const MultipleSelectionSection = ({ content }: { content: contentType }) => {
    if (content.type !== 'MULTIPLE') return null

    const { data } = content

    return <div className="section section-multiple-selection">
        <h4>Zaznaczenie:</h4>

        <div className={`info-pill ${data.folders.length > 0 ? '' : 'info-pill-zero'}`}>
            <span>Foldery:</span>

            {data.folders.length}
        </div>

        <div className={`info-pill ${data.files.length > 0 ? '' : 'info-pill-zero'}`}>
            <span>Pliki:</span>

            {data.files.length}
        </div>
    </div>
}

export default MultipleSelectionSection