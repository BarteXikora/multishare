/** 
 * No preview section
 * 
 * Rendered in the PreviewContentSection component if opened file do not have a preview. It displays
 * file type icon.
**/

import StyledNoPreviewSection from './NoPreviewSection.styles'
import getPreviewImage from '../../../../functions/fileTypes/getPreviewImage/getPreviewImage'

const NoPreviewSection = ({ extension }: { extension: string }) => {

    // Rendering the component:
    return <StyledNoPreviewSection>
        <div className="icon">
            <img src={getPreviewImage(false, extension)} alt='Podgląd niedostępny' />
        </div>

        <h3>Podgląd niedostępny.</h3>
    </StyledNoPreviewSection>
}

export default NoPreviewSection