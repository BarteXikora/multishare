import PreviewSection from '../../sections/previewSection/PreviewSection'
import NameSection from '../../sections/nameSection/NameSection'
import MultipleSelectionSection from '../../sections/multipleSelectionSection/MultipleSelectionSection'

import { contentMultipleType } from '../../../../../store/features/detailsSectionSlice/initialState.types'
import imgMultiple from '../../../../../assets/images/img-multiple-selection.svg'

const MultipleDetails = ({ content }: { content: contentMultipleType }) => {
    const { folders, files } = content.data

    return <>
        <PreviewSection
            type='ICON'
            image={imgMultiple}
            imageAltText='Zaznaczono wiele elementów'
            isStar={false}
        />

        <NameSection name='Zaznaczono wiele elementów.' />

        <MultipleSelectionSection
            folders={folders.length}
            files={files.length}
        />
    </>
}

export default MultipleDetails