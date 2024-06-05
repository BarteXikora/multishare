import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import DetailsListSection from '../../sections/detailsListSection/DetailsListSection'

import { contentFileType } from '../../../../../store/features/detailsSectionSlice/initialState.types'
import getPreviewImage from '../../../../../functions/fileTypes/getPreviewImage/getPreviewImage'
import getFileTypeName from '../../../../../functions/fileTypes/getFileTypeName/getFileTypeName'

const SingleFileDetails = ({ content }: { content: contentFileType }) => {
    const { name, extension, star, details, preview } = content.data

    return <>
        <PreviewSection
            type='IMAGE'
            image={getPreviewImage(preview, extension)}
            imageAltText='Podgląd'
            isStar={star}
        />

        <NameSection name={name} extension={'.' + extension.toLocaleLowerCase()} />

        <DetailsListSection
            type={getFileTypeName(extension)}
            fileSizeBites={details.fileSizeBites}
            createdDate={details.createdDate}
            lastModificationDate={details.lastModificationDate}
        />
    </>
}

export default SingleFileDetails