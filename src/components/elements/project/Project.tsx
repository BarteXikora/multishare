import StyledProject from './Project.styles'
import imgProject from '../../../assets/images/img-project.svg'

type ProjectType = {
    name: string
    icon?: string
    description?: string
    onClick: () => void
}

const Project = ({ name, icon, description, onClick }: ProjectType) => {
    return <StyledProject $variant='secondary' onClick={onClick}>
        <div className="icon">
            <img src={icon || imgProject} alt={`Projekt: ${name}`} />
        </div>

        <div className="name">
            <h2>{name}</h2>

            {
                description && <p>{description}</p>
            }
        </div>
    </StyledProject>
}

export default Project