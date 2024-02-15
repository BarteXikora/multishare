import StyledSingleFileDetails from './SingleFileDetails.styles'
import getPreviewImage from '../../../../functions/getPreviewImage/getPreviewImage'
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
    </StyledSingleFileDetails>
}

export default SingleFileDetails