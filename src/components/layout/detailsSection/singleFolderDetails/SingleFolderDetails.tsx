import StyledSingleFolderDetails from './SingleFolderDetails.styles'
import Moment from 'react-moment'
import { folderDisplayType } from '../../../../store/features/contentSlice/contentSlice.types'

import imgFolder from '../../../../assets/images/img-folder.svg'
import imgEmptyFolder from '../../../../assets/images/img-empty-folder.svg'
import iconFolder from '../../../../assets/icons/icon-project.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'

const SingleFolderDetails = ({ data }: { data: folderDisplayType }) => {
    return <StyledSingleFolderDetails>
        <div className="section-icon">
            <div className="icon">
                {
                    data.insideContent.folders + data.insideContent.files === 0 ?
                        <img className='icon-folder' src={imgEmptyFolder} alt='Folder' />
                        :
                        <img className='icon-folder' src={imgFolder} alt='Folder' />
                }

                {
                    data.star && <img className='icon-star' src={iconStar} alt='Oznaczony gwiazdką' />
                }
            </div>
        </div>

        <div className="section-name">
            <h3>
                <img src={iconFolder} alt='Folder' />

                <span>{data.name}</span>
            </h3>
        </div>

        <div className="section section-content">
            <h4>Zawartość:</h4>

            {
                data.insideContent.folders + data.insideContent.files === 0 ?
                    <div className="info-pill info-pill-zero">Pusty folder</div>
                    :
                    <>
                        <div className={`info-pill ${data.insideContent.folders > 0 ? '' : 'info-pill-zero'}`}>
                            <span>Podfoldery:</span>

                            {data.insideContent.folders}
                        </div>

                        <div className={`info-pill ${data.insideContent.files > 0 ? '' : 'info-pill-zero'}`}>
                            <span>Pliki:</span>

                            {data.insideContent.files}
                        </div>
                    </>
            }
        </div>

        <div className="section section-details">
            <h4>Szczegóły:</h4>

            <div className="details-table">
                <div className="detail-row">
                    <div className="detail-name">Typ:</div>

                    <div className="detail-value">Folder plików</div>
                </div>

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
    </StyledSingleFolderDetails>
}

export default SingleFolderDetails