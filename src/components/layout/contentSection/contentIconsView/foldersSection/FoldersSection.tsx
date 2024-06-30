import Folder from '../../../../elements/folder/Folder'
import useContentEvents from '../../../../../hooks/useContentEvents/useContentEvents'

import { contentDisplayType, onMoveType, selectedType } from '../../../../../store/features/contentSlice/contentSlice.types'

const FoldersSection = ({ content, selected, onMove }: { content: contentDisplayType, selected: selectedType, onMove: onMoveType }) => {
    const { folderEvents } = useContentEvents()

    return <section className='folders-section'>
        <h2>Foldery:</h2>

        <div className="content">
            {
                content.folders.map(folder => {
                    return <Folder
                        key={folder.id}
                        id={folder.id}
                        displayName={folder.name}
                        isStar={folder.star || false}
                        isSelected={selected.folders ? selected.folders.includes(folder.id) : false}
                        isOnMove={onMove.folders.includes(folder.id)}
                        isTarget={onMove.targetElement ? onMove.targetElement.id === folder.id : false}

                        onClick={e => folderEvents.onClick(e, folder.id)}
                        onContextMenu={e => folderEvents.onContextMenu(e, folder.id)}
                        onDoubleClick={() => folderEvents.onDoubleClick(folder.id)}
                        onTouchStart={() => folderEvents.onTouchStart(folder.id)}
                        onTouchMove={() => folderEvents.onTouchMove(folder.id)}
                        onTouchEnd={() => folderEvents.onTouchEnd(folder.id)}

                        onMouseDown={e => folderEvents.onMouseDown(e, folder.id)}
                        onMouseUp={e => folderEvents.onMouseUp(e, folder.id)}
                        onMouseMove={e => folderEvents.onMouseMove(e, folder.id)}
                        onMouseEnter={e => folderEvents.onMouseEnter(e, folder.id)}
                        onMouseLeave={e => folderEvents.onMouseLeave(e, folder.id)}
                    />
                })
            }
        </div>
    </section>
}

export default FoldersSection