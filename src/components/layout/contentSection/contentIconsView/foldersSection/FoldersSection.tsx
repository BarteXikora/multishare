import Folder from '../../../../elements/folder/Folder'
import useContentEvents from '../../../../../functions/useContentEvents/useContentEvents'

import { contentDisplayType, selectedType } from '../../../../../store/features/contentSlice/contentSlice.types'

const FoldersSection = ({ content, selected }: { content: contentDisplayType, selected: selectedType }) => {
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

                        onClick={e => folderEvents.onClick(e, folder.id)}
                        onDoubleClick={() => folderEvents.onDoubleClick(folder.id)}
                        onTouchStart={e => folderEvents.onTouchStart(e, folder.id)}
                        onTouchEnd={e => folderEvents.onTouchEnd(e, folder.id)}
                    />
                })
            }
        </div>
    </section>
}

export default FoldersSection