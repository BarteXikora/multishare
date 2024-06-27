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
    if (!project) return null

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