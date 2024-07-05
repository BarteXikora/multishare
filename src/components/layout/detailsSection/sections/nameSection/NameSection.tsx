/** 
 * Name section
 * 
 * Used in all details section types. It displays the folder or file name. If it is a file, than in adds the extension. 
**/

import StyledNameSection from './NameSection.styles'

// Name section poprs stypes:
type NameSectionType = {
    name: string
    extension?: string
}

const NameSection = ({ name, extension }: NameSectionType) => {

    // Rendering the component:
    return <StyledNameSection>
        <h3>
            {name}

            {extension !== undefined && <span className="extension">{extension}</span>}
        </h3>
    </StyledNameSection>
}

export default NameSection