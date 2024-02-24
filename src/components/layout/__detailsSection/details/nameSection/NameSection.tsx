import { contentType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

const NameSection = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <div className="section section-name">
        <h3>
            {
                (type === 'FOLDER' || type === 'FILE') ?
                    `${data.name}${type === 'FILE' ? '.' + data.extension.toLowerCase() : ''}`
                    :
                    'Zaznaczono wiele elementów.'
            }
        </h3>
    </div>
}

export default NameSection