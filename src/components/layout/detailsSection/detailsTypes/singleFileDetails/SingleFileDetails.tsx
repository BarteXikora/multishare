import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import DetailsListSection from '../../sections/detailsListSection/DetailsListSection'

import { contentFileType } from '../../../../../store/features/detailsSectionSlice/initialState.types'
import getPreviewImage from '../../../../../functions/getPreviewImage/getPreviewImage'
import getFileTypeName from '../../../../../functions/getFileTypeName/getFileTypeName'

const SingleFileDetails = ({ content }: { content: contentFileType }) => {
    const { name, extension, star, details } = content.data

    return <>
        <PreviewSection
            type='IMAGE'
            image={getPreviewImage(false, extension)}
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