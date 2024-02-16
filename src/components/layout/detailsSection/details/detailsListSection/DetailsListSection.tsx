import Moment from 'react-moment'
import getDataWithUnit from '../../../../../functions/getDataWithUnit/getDataWithUnit'

import { contentType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

const DetailsListSection = ({ content }: { content: contentType }) => {
    if (content.type !== 'FOLDER' && content.type !== 'FILE') return null

    const { type, data } = content

    return <div className="section section-details-list">
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
                        {getDataWithUnit(data.details.fileSizeBites)}
                    </div>
                </div>
            }

            {
                data.details.createdDate && <div className="detail-row">
                    <div className="detail-name">Data utworzenia:</div>

                    <div className="detail-value">
                        <Moment format='D.MM.yyyy, HH:mm:ss'>
                            {data.details.createdDate}
                        </Moment>
                    </div>
                </div>
            }

            {
                data.details.lastModificationDate && <div className="detail-row">
                    <div className="detail-name">Data ostatniej modyfikacji:</div>

                    <div className="detail-value">
                        <Moment format='D.MM.yyyy, HH:mm:ss'>
                            {data.details.lastModificationDate}
                        </Moment>
                    </div>
                </div>
            }
        </div>
    </div>
}

export default DetailsListSection