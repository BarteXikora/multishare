/** 
 * Path component
 * 
 * It renders the very path in the form of buttons click on whitch sets the postion to
 * the selected location. 
 * If path is less than 5 elements in length, then component renders
 * a button for each element. If the path is longer than 5 elements, then it renders the CollapsedPathButton
 * component and last 2 elements of the path. Component renders also a separator between each element. 
**/

import { Fragment } from 'react'

import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'
import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledPath from './Path.styles'
import AnimatedPathFragment from './Path.animation'
import CollapsedPathButton from '../collapsedPathButton/CollapsedPathButton'
import Button from '../../../ui/button/Button'
import { IconArrowRight } from '../../../ui/icon/Icons'

import { AnimatePresence } from 'framer-motion'

const Path = ({ path }: { path: pathType[] }) => {
    const dispatch = useDispatch()

    // Rendering the component:
    return <StyledPath>
        {path.length > 4 && <CollapsedPathButton path={path} />}

        <AnimatePresence>

            {
                path.map((pathElement, n) => (
                    <AnimatedPathFragment key={n}>
                        {
                            (path.length <= 4 || (path.length > 4 && n > path.length - 3)) ?
                                <Fragment key={n}>
                                    <Button
                                        $variant='tertiary'
                                        className={`path-button ${pathElement.notFound ? 'path-button-not-found' : ''}`}
                                        onClick={() => dispatch(setTreeLocation(pathElement.id))}
                                    >
                                        {pathElement.name}
                                    </Button>

                                    {n < path.length - 1 && <IconArrowRight />}
                                </Fragment>

                                :

                                <></>
                        }
                    </AnimatedPathFragment>
                ))
            }
        </AnimatePresence>
    </StyledPath>
}

export default Path