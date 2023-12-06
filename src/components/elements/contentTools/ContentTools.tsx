import StyledContentTools from './ContentTools.styles'

import GeneralTools from './contentToolsSections/GeneralTools'
import SelectedTools from './contentToolsSections/SelectedTools'
import ListTools from './contentToolsSections/ListTools'

const ContentTools = () => {
    return <StyledContentTools>
        <GeneralTools />

        <SelectedTools />

        <ListTools />
    </StyledContentTools>
}

export default ContentTools