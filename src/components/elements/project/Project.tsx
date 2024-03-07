import StyledProject from './Project.styles'
import imgProject from '../../../assets/images/img-project.svg'

type ProjectType = {
    name: string
    icon?: string
    description?: string
}

const Project = ({ name, icon, description }: ProjectType) => {
    return <StyledProject $variant='secondary'>
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