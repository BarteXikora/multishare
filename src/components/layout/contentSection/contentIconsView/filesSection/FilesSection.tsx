import File from '../../../../elements/file/File'
import useContentEvents from '../../../../../functions/useContentEvents/useContentEvents'

import { contentDisplayType, displayTypeType, onMoveType, selectedType } from '../../../../../store/features/contentSlice/contentSlice.types'

type filesSectionType = {
    content: contentDisplayType,
    selected: selectedType,
    onMove: onMoveType
    displayType: displayTypeType
}

const FilesSection = ({ content, selected, onMove, displayType }: filesSectionType) => {
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
                        isOnMove={onMove.files.includes(file.id)}
                        isTarget={onMove.targetElement ? onMove.targetElement.id === file.id : false}

                        onClick={e => filesEvents.onClick(e, file.id)}
                        onDoubleClick={() => filesEvents.onDoubleClick(file.id)}
                        onTouchStart={e => filesEvents.onTouchStart(e, file.id)}
                        onTouchEnd={e => filesEvents.onTouchEnd(e, file.id)}

                        onMouseDown={e => filesEvents.onMouseDown(e, file.id)}
                        onMouseMove={e => filesEvents.onMouseMove(e, file.id)}
                        onMouseEnter={e => filesEvents.onMouseEnter(e, file.id)}
                        onMouseLeave={e => filesEvents.onMouseLeave(e, file.id)}
                    />
                })
            }
        </div>
    </section>
}

export default FilesSection