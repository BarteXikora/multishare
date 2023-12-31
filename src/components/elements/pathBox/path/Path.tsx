import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledPath from './Path.styles'
import CollapsedPathButton from '../collapsedPathButton/CollapsedPathButton'
import Button from '../../../ui/button/Button'

import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

const Path = ({ path }: { path: pathType }) => {
    const dispatch = useDispatch()

    return <StyledPath>
        {path.length > 4 && <CollapsedPathButton path={path} />}

        {
            path.map((pathElement, n) => {
                if (path.length <= 4 || (path.length > 4 && n > path.length - 3))
                    return <>
                        <Button
                            key={n}
                            $variant='tertiary'
                            className='path-button'
                            onClick={() => dispatch(setTreeLocation(pathElement.id))}
                        >
                            {pathElement.name}
                        </Button>

                        {n < path.length - 1 && <img src={iconArrow} alt="/" />}
                    </>

                return <></>
            })
        }
    </StyledPath>
}

export default Path