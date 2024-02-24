import getPreviewImage from '../../../../../functions/getPreviewImage/getPreviewImage'

import { contentType } from "../../../../../store/features/detailsSectionSlice/initialState.types"

import imgFolder from '../../../../../assets/images/img-folder.svg'
import imgEmptyFolder from '../../../../../assets/images/img-empty-folder.svg'
import imgMultiple from '../../../../../assets/images/img-multiple-selection.svg'
import iconStar from '../../../../../assets/icons/icon-star-color.svg'

const PreviewSection = ({ content }: { content: contentType }) => {
    if (content.type === 'EMPTY') return null

    const { type, data } = content

    return <div className="preview-section">
        {
            type === 'FOLDER' && <div className="icon-section">
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
        }

        {
            type === 'FILE' && <div
                className="preview-image"
                style={{ backgroundImage: `url(${getPreviewImage(false, data.extension)})` }}
            ></div>
        }

        {
            type === 'MULTIPLE' && <div className="icon-section">
                <img src={imgMultiple} alt="Zaznaczono wiele elementów." />
            </div>
        }
    </div>
}

export default PreviewSection