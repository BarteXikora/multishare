import StyledDetails from './Details.styles'
import Moment from 'react-moment'
import getPreviewImage from '../../../../functions/getPreviewImage/getPreviewImage'
import { contentType } from '../../../../store/features/detailsSectionSlice/initialState.types'

import imgFolder from '../../../../assets/images/img-folder.svg'
import imgEmptyFolder from '../../../../assets/images/img-empty-folder.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'

const Details = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <StyledDetails>






        <div className="preview-section">
            {
                type === 'FOLDER' && <div className="icon">
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
            }

            {
                type === 'FILE' && <div
                    className="preview-section"
                    style={{ backgroundImage: `url(${getPreviewImage(false, data.extension)})` }}
                ></div>
            }
        </div>









        <div className="section-name">
            <h3>
                {
                    (type === 'FOLDER' || type === 'FILE') ?
                        data.name
                        :
                        'Zaznaczono wiele elementów'
                }
            </h3>
        </div>








        {
            type === 'FOLDER' && <div className="section section-content">
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
        }





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