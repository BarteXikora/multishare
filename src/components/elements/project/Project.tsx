import StyledProject from './Project.styles'
import { projectIconType } from '../../../store/features/userSlice/userSlice.types'
import getProjectIcon from '../../../functions/getProjectIcon/getProjectIcon'

type ProjectType = {
    name: string
    description?: string
    icon?: projectIconType
    onClick: () => void
}

const Project = ({ name, icon, description, onClick }: ProjectType) => {
    return <StyledProject $variant='secondary' onClick={onClick}>
        {
            (!icon || icon.type === 'ICON') && <div className="preview icon">
                <img src={getProjectIcon(icon).content} alt={`Projekt: ${name}`} />
            </div>
        }

        {
            icon?.type === 'LINK' && <div className="preview image" style={{ backgroundImage: `url(${icon.link})` }}></div>
        }

        <div className="name">
            <h2>{name}</h2>

            {
                description && <p>{description}</p>
            }
        </div>
    </StyledProject>
}

export default Project