/** 
 * Preview content section
 * 
 * Rendered in the FilePage component. It displays the proper type of preview of selected file based on its type.
**/

import StyledPreviewContentSection from './PreviewContentSection.styles'
import NoPreviewSection from './noPreviewSection/NoPreviewSection'
import ImagePreviewSection from './imagePreviewSection/ImagePreviewSection'
import TextPreviewSection from './textPreviewSection/TextPreviewSection'

import { fileType } from '../../../store/features/contentSlice/contentSlice.types'

// Preview content section props types:
type previewContntSectionType = {
    type: 'IMAGE' | 'TEXT' | 'NO_PREVIEW'
    data: string
    extension: string
    file: fileType
}

const PreviewContentSection = ({ type, data, extension, file }: previewContntSectionType) => {

    // Rndering the component:
    return <StyledPreviewContentSection>
        {type === 'NO_PREVIEW' && <NoPreviewSection extension={extension} />}

        {type === 'IMAGE' && <ImagePreviewSection data={data} />}

        {type === 'TEXT' && <TextPreviewSection data={data} file={file} />}
    </StyledPreviewContentSection>
}

export default PreviewContentSection