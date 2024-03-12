import { Fragment } from 'react'

import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledPath from './Path.styles'
import CollapsedPathButton from '../collapsedPathButton/CollapsedPathButton'
import Button from '../../../ui/button/Button'

import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

const Path = ({ path }: { path: pathType }) => {
    const dispatch = useDispatch()

    console.log(path)


    return <StyledPath>
        {path.length > 4 && <CollapsedPathButton path={path} />}

        {
            path.map((pathElement, n) => (
                <Fragment key={n}>
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

                                {n < path.length - 1 && <img src={iconArrow} alt="/" />}
                            </Fragment>

                            :

                            <></>
                    }
                </Fragment>
            ))
        }
    </StyledPath>
}

export default Path