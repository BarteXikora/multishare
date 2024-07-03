/** 
 * Collapsed path button 
 * 
 * It is rendered in the Path coponent if the path s longer than 4 elements. It displays
 * a dropdown button with a collapsed path.  
**/

import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'
import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import AnimatedCollapsedPathButton from './CollapsedPathButton.animation'
import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'
import { IconFolder, IconArrowRight } from '../../../ui/icon/Icons'

const CollapsedPathButton = ({ path }: { path: pathType[] }) => {
    const dispatch = useDispatch()

    // Rendering the component:
    return <AnimatedCollapsedPathButton>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'

            dropdownContent={<>{
                path.map((pathElement, n) => {
                    return <Button
                        key={n}
                        $variant='secondary'
                        onClick={() => dispatch(setTreeLocation(pathElement.id))}
                    >
                        <IconFolder $color='dark' />

                        {pathElement.name}
                    </Button>
                })
            }</>}
        />

        <span className="separator">...</span>

        <IconArrowRight />
    </AnimatedCollapsedPathButton>
}

export default CollapsedPathButton