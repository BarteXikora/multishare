import { contentType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

const NameSection = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <div className="section-name">
        <h3>
            {
                (type === 'FOLDER' || type === 'FILE') ?
                    data.name
                    :
                    'Zaznaczono wiele elementów'
            }
        </h3>
    </div>
}

export default NameSection