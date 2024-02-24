import StyledNameSection from './NameSection.styles'

type NameSectionType = {
    name: string
    extension?: string
}

const NameSection = ({ name, extension }: NameSectionType) => {
    return <StyledNameSection>
        <h3>
            {name}

            {extension !== undefined && <span className="extension">{extension}</span>}
        </h3>
    </StyledNameSection>
}

export default NameSection