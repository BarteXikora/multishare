import StyledDetails from './Details.styles'
import Moment from 'react-moment'

import PreviewSection from './previewSection/PreviewSection'
import NameSection from './nameSection/NameSection'

import { contentType } from '../../../../store/features/detailsSectionSlice/initialState.types'

const Details = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <StyledDetails>
        <PreviewSection content={content} />

        <NameSection content={content} />


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