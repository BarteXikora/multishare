import StyledContentListView from './ContentListView.styles'

import ListHeader from '../../../elements/listHeader/ListHeader'

import { useSelector } from '../../../../store/store'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)

    return <StyledContentListView>
        {
            (content && (content.folders || content.files)) && <div className="content-list">
                <ListHeader />

                <div className="list-body list-grid"></div>
            </div>
        }

        {(!content || (!content.folders && !content.files)) && <EmptyFolder />}
    </StyledContentListView>
}

export default ContentListView