import { displayTypeType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledTitle from './Title.styles'
import { IconFiles, IconTrash } from '../../../ui/icon/Icons'

const Title = ({ displayType }: { displayType: displayTypeType }) => {
    return <StyledTitle>
        {
            displayType === 'FILES' && <>
                <IconFiles $outline />

                <h2>Wszystkie pliki:</h2>
            </>
        }

        {
            displayType === 'TRASH' && <>
                <IconTrash $outline />

                <h2>Kosz:</h2>
            </>
        }
    </StyledTitle>
}

export default Title