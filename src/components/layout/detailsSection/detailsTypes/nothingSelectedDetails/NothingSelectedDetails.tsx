/** 
 * Nothing selected
 * 
 * Rendered in the DtailsSction component when nothing is selected. It displays
 * information about the project and the DropSection component, so user can drag and
 * drop files on the DtailsSction to upload them to the current folders tree location.
**/

import StyledNothingSelectedDetails from './NothingSelectedDetails.styles'
import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import DropSection from '../../sections/dropSection/DropSection'
import getProjectIcon from '../../../../../functions/getProjectIcon/getProjectIcon'
import { projectType } from '../../../../../store/features/userSlice/userSlice.types'

type NothingSelectedDetailsType = {
    project: projectType | null
}

const NothingSelectedDetails = ({ project }: NothingSelectedDetailsType) => {
    // Rendering nothing if project is not loaded:
    if (!project) return null

    // Rendering the component:
    return <StyledNothingSelectedDetails>
        <PreviewSection
            type={getProjectIcon(project.icon).type}
            image={getProjectIcon(project.icon).content}
            imageAltText='Projekt'
            isStar={false}
        />

        <NameSection name={project.name} />

        <div className="separator">
            <hr />
        </div>

        <DropSection />
    </StyledNothingSelectedDetails>
}

export default NothingSelectedDetails