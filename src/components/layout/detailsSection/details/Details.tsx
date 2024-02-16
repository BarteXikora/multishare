import StyledDetails from './Details.styles'
import Moment from 'react-moment'

import PreviewSection from './previewSection/PreviewSection'
import NameSection from './nameSection/NameSection'
import InsideContentSection from './insideContentSection/InsideContentSection'

import { contentType } from '../../../../store/features/detailsSectionSlice/initialState.types'

const Details = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <StyledDetails>
        <PreviewSection content={content} />

        <NameSection content={content} />

        <InsideContentSection content={content} />






        {
            (type === 'FOLDER' || type === 'FILE') && <div className="section section-details">
                <h4>Szczegóły:</h4>

                <div className="details-table">
                    <div className="detail-row">
                        <div className="detail-name">Typ:</div>

                        <div className="detail-value">__WIP...</div>
                    </div>

                    {
                        type === 'FILE' && data.details.fileSizeBites && <div className="detail-row">
                            <div className="detail-name">Rozmiar pliku:</div>

                            <div className="detail-value">
                                {data.details.fileSizeBites} B
                            </div>
                        </div>
                    }

                    {
                        data.details.createdDate && <div className="detail-row">
                            <div className="detail-name">Data utworzenia:</div>

                            <div className="detail-value">
                                <Moment format='D.MM.yyyy, HH:mm.ss'>
                                    {data.details.createdDate}
                                </Moment>
                            </div>
                        </div>
                    }

                    {
                        data.details.lastModificationDate && <div className="detail-row">
                            <div className="detail-name">Data ostatniej modyfikacji:</div>

                            <div className="detail-value">
                                <Moment format='D.MM.yyyy, HH:mm.ss'>
                                    {data.details.lastModificationDate}
                                </Moment>
                            </div>
                        </div>
                    }
                </div>
            </div>
        }


    </StyledDetails>
}

export default Details