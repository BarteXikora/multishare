/** 
 * Text preview section
 * 
 * Rendered in the PrviewContentSection component if opened file is a text file. It displays
 * the files name and content.
**/

import { fileType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledTextPreviewSection from './TextPreviewSection.styles'

const TextPreviewSection = ({ file, data }: { file: fileType, data: string }) => {

    // Rendering the component. 
    return <StyledTextPreviewSection>
        <div className="title">
            <h3>{file.name}</h3>
        </div>

        <hr />

        <p>{data}</p>
    </StyledTextPreviewSection>
}

export default TextPreviewSection