import StyledTextPreviewSection from './TextPreviewSection.styles'
import Button from '../../../ui/button/Button'

import { fileType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconEdit from '../../../../assets/icons/icon-edit.svg'

const TextPreviewSection = ({ file, data }: { file: fileType, data: string }) => {
    return <StyledTextPreviewSection>
        <div className="title">
            <h3>{file.name}</h3>

            <Button $variant='secondary' className='edit-button'>
                <img src={iconEdit} alt='Edytuj' />

                Edytuj
            </Button>
        </div>

        <hr />

        <p>{data}</p>
    </StyledTextPreviewSection>
}

export default TextPreviewSection