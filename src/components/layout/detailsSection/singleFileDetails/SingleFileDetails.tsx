import StyledSingleFileDetails from './SingleFileDetails.styles'
import getPreviewImage from '../../../../functions/getPreviewImage/getPreviewImage'
import Moment from 'react-moment'
import { fileType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconFile from '../../../../assets/icons/icon-file.svg'

const SingleFileDetails = ({ data }: { data: fileType }) => {
    return <StyledSingleFileDetails>
        <div
            className="preview-section"
            style={{ backgroundImage: `url(${getPreviewImage(false, data.extension)})` }}
        ></div>

        <div className="section-name">
            <h3>
                <img src={iconFile} alt='Plik' />

                <span>{`${data.name}.${data.extension.toLocaleLowerCase()}`}</span>
            </h3>
        </div>

        <div className="section section-details">
            <h4>Szczegóły:</h4>

            <div className="details-table">
                <div className="detail-row">
                    <div className="detail-name">Typ:</div>

                    <div className="detail-value">Folder plików</div>
                </div>

                {
                    data.details.fileSizeBites && <div className="detail-row">
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
    </StyledSingleFileDetails>
}

export default SingleFileDetails