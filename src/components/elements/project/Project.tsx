/** 
 * Project; renders single project list element, used to select a project
 * 
 * It displays projects name, icon and description 
**/

import StyledProject from './Project.styles'
import { projectIconType } from '../../../store/features/userSlice/userSlice.types'
import getProjectIcon from '../../../functions/getProjectIcon/getProjectIcon'

import { IconProjects } from '../../ui/icon/Icons'

// Project props types:
type ProjectType = {
    name: string
    description?: string
    icon?: projectIconType
    onClick: () => void
    isSelected: boolean
}

const Project = ({ name, icon, description, onClick, isSelected }: ProjectType) => {

    // Rendering the component:
    return <StyledProject $variant='secondary' onClick={onClick}>
        {
            (!icon || icon.type === 'ICON') && <div className="preview icon">
                <img src={getProjectIcon(icon).content} alt={`Projekt: ${name}`} />
            </div>
        }

        {
            icon?.type === 'LINK' && <div className="preview image" style={{ backgroundImage: `url(${icon.link})` }}></div>
        }

        <div className="mobile-icon">
            <IconProjects $color='dark' />
        </div>

        <div className="name">
            {isSelected && <div className="selected-pill">Wybrany</div>}

            <h2>{name}</h2>

            {
                description && <p>{description}</p>
            }
        </div>
    </StyledProject>
}

export default Project