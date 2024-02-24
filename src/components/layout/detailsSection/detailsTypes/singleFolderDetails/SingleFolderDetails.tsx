import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import InsideContentSection from '../../sections/insideContentSection/InsideContentSection'
import DetailsListSection from '../../sections/detailsListSection/DetailsListSection'

import { contentFolderType } from '../../../../../store/features/detailsSectionSlice/initialState.types'

import imgFolder from '../../../../../assets/images/img-folder.svg'
import imgEmptyFolder from '../../../../../assets/images/img-empty-folder.svg'

const SingleFolderDetails = ({ content }: { content: contentFolderType }) => {
    const { name, insideContent, star, details } = content.data

    return <>
        <PreviewSection
            type='ICON'
            image={insideContent.folders + insideContent.files > 0 ? imgFolder : imgEmptyFolder}
            imageAltText='Folder'
            isStar={star}
        />

        <NameSection name={name} />

        <InsideContentSection
            folders={insideContent.folders}
            files={insideContent.files}
        />

        <DetailsListSection
            type='Folder plików'
            createdDate={details.createdDate}
            lastModificationDate={details.lastModificationDate}
        />
    </>
}

export default SingleFolderDetails