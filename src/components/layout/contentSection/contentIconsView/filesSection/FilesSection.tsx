import File from '../../../../elements/file/File'
import useContentEvents from '../../../../../functions/useContentEvents/useContentEvents'

import { contentDisplayType, displayTypeType, selectedType } from '../../../../../store/features/contentSlice/contentSlice.types'

type filesSectionType = {
    content: contentDisplayType,
    selected: selectedType,
    displayType: displayTypeType
}

const FilesSection = ({ content, selected, displayType }: filesSectionType) => {
    const { filesEvents } = useContentEvents()

    return <section className='files-section'>
        <h2>{displayType !== 'FILES' ? 'Pliki:' : 'Wszystkie pliki:'}</h2>

        <div className="content">
            {
                content.files.map(file => {
                    return <File
                        key={file.id}
                        displayName={file.name}
                        extension={file.extension}
                        preview={file.preview}
                        isStar={file.star || false}
                        isSelected={selected.files ? selected.files.includes(file.id) : false}

                        onClick={e => filesEvents.onClick(e, file.id)}
                        onDoubleClick={() => filesEvents.onDoubleClick(file.id)}
                        onTouchStart={e => filesEvents.onTouchStart(e, file.id)}
                        onTouchEnd={e => filesEvents.onTouchEnd(e, file.id)}
                    />
                })
            }
        </div>
    </section>
}

export default FilesSection