import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'
import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import StyledCurrentFolderButton from './CurrentFolderButton.styles'
import Button from '../../../ui/button/Button'
import { IconFolder } from '../../../ui/icon/Icons'

const CurrentFolderButton = ({ path }: { path: pathType[] }) => {
    const dispatch = useDispatch()

    return <StyledCurrentFolderButton
        buttonOptions={{ $variant: 'tertiary' }}
        showArrow={false}

        buttonContent={<span className={path[path.length - 1]?.notFound ? 'path-button-not-found' : ''}>
            {path[path.length - 1]?.name || ''}
        </span>}

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