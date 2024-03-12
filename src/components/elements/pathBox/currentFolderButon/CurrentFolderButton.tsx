import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledCurrentFolderButton from './CurrentFolderButton.styles'
import Button from '../../../ui/button/Button'

import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconFolder from '../../../../assets/icons/icon-folder-dark.svg'
import iconFolderWrong from '../../../../assets/icons/icon-folder-wrong.svg'

const CurrentFolderButton = ({ path }: { path: pathType }) => {
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
                    <img src={pathElement.notFound ? iconFolderWrong : iconFolder} alt='Folder' />

                    {pathElement.name}
                </Button>
            })
        }</>}

    ></StyledCurrentFolderButton>
}

export default CurrentFolderButton