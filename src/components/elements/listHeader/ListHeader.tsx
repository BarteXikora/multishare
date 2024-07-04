/** 
 * List header; renders the contents list header
 * 
 * It is rendered in the ContentListView. 
**/

import { IconStar } from '../../ui/icon/Icons'

const ListHeader = () => {

    // Rendering the component:
    return <div className="list-header list-grid">
        <div className='name-column'>
            Nazwa:
        </div>

        <div className='star-column'>
            <IconStar />
        </div>

        <div className='date-column'>
            Data modyfikacji:
        </div>

        <div className='type-column'>
            Typ:
        </div>

        <div className='size-column'>
            Rozmiar:
        </div>
    </div>
}

export default ListHeader