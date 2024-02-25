import StyledNothingSelectedDetails from './NothingSelectedDetails.styles'
import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import DropSection from '../../sections/dropSection/DropSection'

import { projectType } from '../../../../../store/features/contentSlice/contentSlice.types'
import imgProject from '../../../../../assets/images/img-project.svg'

type NothingSelectedDetailsType = {
    isHomeFolder: boolean
    project: projectType
}

const NothingSelectedDetails = ({ isHomeFolder, project }: NothingSelectedDetailsType) => {
    return <StyledNothingSelectedDetails>
        {
            isHomeFolder && <>
                <PreviewSection
                    type='ICON'
                    image={imgProject}
                    imageAltText='Projekt'
                    isStar={false}
                />

                <NameSection name={project.name} />

                <div className="separator">
                    <hr />
                </div>
            </>
        }

        <DropSection />
    </StyledNothingSelectedDetails>
}

export default NothingSelectedDetails