/** 
 * Details list section
 * 
 * Used in SingleFolderSection and SingleFileSection component. It displays details of selected
 * element as file type, size, etc... It gets the data as props; the data is sent from the server
 * when project is loading. 
**/

import StyledDetailsListSection from './DetailsListSection.styles'

import Moment from 'react-moment'
import getDataWithUnit from '../../../../../functions/getDataWithUnit/getDataWithUnit'

// Details list section props types:
type DetailsListSectionType = {
    type: string
    fileSizeBites?: number
    createdDate?: string
    lastModificationDate?: string
}

const DetailsListSection = ({ type, fileSizeBites, createdDate, lastModificationDate }: DetailsListSectionType) => {

    // Rendering the component:
    return <StyledDetailsListSection>
        <h4>Szczegóły:</h4>

        <div className="details-table">
            <div className="detail-row">
                <div className="detail-name">Typ:</div>

                <div className="detail-value">{type}</div>
            </div>

            {
                fileSizeBites && <div className="detail-row">
                    <div className="detail-name">Rozmiar pliku:</div>

                    <div className="detail-value">{getDataWithUnit(fileSizeBites)}</div>
                </div>
            }

            {
                createdDate && <div className="detail-row">
                    <div className="detail-name">Data utworzenia:</div>

                    <div className="detail-value">
                        <Moment format='D.MM.yyyy, HH:mm:ss'>
                            {createdDate}
                        </Moment>
                    </div>
                </div>
            }

            {
                lastModificationDate && <div className="detail-row">
                    <div className="detail-name">Data ostatniej modyfikacji:</div>

                    <div className="detail-value">
                        <Moment format='D.MM.yyyy, HH:mm:ss'>
                            {lastModificationDate}
                        </Moment>
                    </div>
                </div>
            }
        </div>
    </StyledDetailsListSection>
}

export default DetailsListSection