import StyledTitle from './Title.styles'
import { displayTypeType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconFiles from '../../../../assets/icons/icon-files.svg'
import iconTrash from '../../../../assets/icons/icon-trash.svg'

const Title = ({ displayType }: { displayType: displayTypeType }) => {
    return <StyledTitle>
        {
            displayType === 'FILES' && <>
                <img src={iconFiles} alt='Wszystkie pliki' />

                <h2>Wszystkie pliki:</h2>
            </>
        }

        {
            displayType === 'TRASH' && <>
                <img src={iconTrash} alt='Kosz' />

                <h2>Kosz:</h2>
            </>
        }
    </StyledTitle>
}

export default Title