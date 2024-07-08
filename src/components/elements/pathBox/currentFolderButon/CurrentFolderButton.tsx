/** 
 * Current folder button
 * 
 * This component is displaing only on mobile. It s a dropdown button with 
 * collapsed path.
**/

import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'
import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledCurrentFolderButton from './CurrentFolderButton.styles'
import AnimatedCurrentFolderButton from './CurrentFolderButton.animation'
import Button from '../../../ui/button/Button'
import { IconFolder } from '../../../ui/icon/Icons'

import { AnimatePresence } from 'framer-motion'

const CurrentFolderButton = ({ path }: { path: pathType[] }) => {
    const dispatch = useDispatch()

    // Rendering the component:
    return <StyledCurrentFolderButton
        buttonOptions={{ $variant: 'tertiary' }}
        showArrow={false}

        buttonContent={<AnimatePresence>
            <AnimatedCurrentFolderButton key={path[path.length - 1]?.name || ''}>
                <span className={path[path.length - 1]?.notFound ? 'path-button-not-found' : ''}>
                    {path[path.length - 1]?.name || ''}
                </span>
            </AnimatedCurrentFolderButton>
        </AnimatePresence>
        }

        dropdownContent={<>{
            path.map((pathElement, n) => {
                return <Button
                    key={n}
                    $variant='secondary'
                    onClick={() => dispatch(setTreeLocation(pathElement.id))}
                    className={`${pathElement.notFound ? 'path-button-not-found' : ''}`}
                >
                    {
                        pathElement.notFound ? <IconFolder $color='wrong' /> : <IconFolder $color='dark' />
                    }

                    {pathElement.name}
                </Button>
            })
        }</>}

    ></StyledCurrentFolderButton>
}

export default CurrentFolderButton