import StyledContentListView from './ContentListView.styles'

import { useSelector } from '../../../../store/store'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

import iconSeparator from '../../../../assets/icons/icon-separator.svg'
import iconStar from '../../../../assets/icons/icon-star.svg'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)

    return <StyledContentListView>
        {
            (content && (content.folders || content.files)) && <div className="content-list">
                <div className="list-header list-grid">
                    <div>Nazwa:</div>

                    <div>
                        <img src={iconSeparator} alt="|" />
                        <img src={iconStar} className='icon-star' alt="Oznaczono gwiazdką" />
                    </div>

                    <div>
                        <img src={iconSeparator} alt="|" />
                        Data modyfikacji:
                    </div>

                    <div>
                        <img src={iconSeparator} alt="|" />
                        Typ:
                    </div>

                    <div>
                        <img src={iconSeparator} alt="|" />
                        Rozmiar:
                    </div>
                </div>

                <div className="list-body list-grid"></div>
            </div>
        }

        {(!content || (!content.folders && !content.files)) && <EmptyFolder />}
    </StyledContentListView>
}

export default ContentListView