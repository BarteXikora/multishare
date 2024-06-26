import { fileType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledTextPreviewSection from './TextPreviewSection.styles'
import Button from '../../../ui/button/Button'
import { IconEdit } from '../../../ui/icon/Icons'

const TextPreviewSection = ({ file, data }: { file: fileType, data: string }) => {
    return <StyledTextPreviewSection>
        <div className="title">
            <h3>{file.name}</h3>

            <Button $variant='secondary' className='edit-button'>
                <IconEdit />

                Edytuj
            </Button>
        </div>

        <hr />

        <p>{data}</p>
    </StyledTextPreviewSection>
}

export default TextPreviewSection