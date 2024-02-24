import StyledDetails from './Details.styles'

import PreviewSection from './previewSection/PreviewSection'
import NameSection from './nameSection/NameSection'
import InsideContentSection from './insideContentSection/InsideContentSection'
import MultipleSelectionSection from './multipleSelectionSection/MultipleSelectionSection'
import DetailsListSection from './detailsListSection/DetailsListSection'

import { contentType } from '../../../../store/features/detailsSectionSlice/initialState.types'

const Details = ({ content }: { content: contentType }) => {
    return <StyledDetails>
        <PreviewSection content={content} />

        <NameSection content={content} />

        <InsideContentSection content={content} />

        <MultipleSelectionSection content={content} />

        <DetailsListSection content={content} />
    </StyledDetails>
}

export default Details