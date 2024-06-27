import { displayTypeType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledTitle from './Title.styles'
import { AnimatedIcon, AnimatedTitle } from './Title.animation'
import { IconFiles, IconTrash } from '../../../ui/icon/Icons'

const Title = ({ displayType }: { displayType: displayTypeType }) => {
    return <StyledTitle>
        <AnimatedIcon>
            {
                displayType === 'FILES' ?
                    <IconFiles $outline />
                    :
                    displayType === 'TRASH' ?
                        <IconTrash $outline />
                        :
                        <></>
            }
        </AnimatedIcon>

        <AnimatedTitle key={displayType}>
            {
                displayType === 'FILES' ?
                    'Wszystkie pliki:'
                    :
                    displayType === 'TRASH' ?
                        'Kosz:'
                        :
                        ''
            }
        </AnimatedTitle>
    </StyledTitle>
}

export default Title