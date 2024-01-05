import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledCurrentFolderButton from './CurrentFolderButton.styles'
import Button from '../../../ui/button/Button'

import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconFolder from '../../../../assets/icons/icon-project.svg'

const CurrentFolderButton = ({ path }: { path: pathType }) => {
    const dispatch = useDispatch()

    return <StyledCurrentFolderButton
        buttonOptions={{ $variant: 'tertiary' }}
        showArrow={false}

        buttonContent={path[path.length - 1]?.name || ''}

        dropdownContent={<>{
            path.map((pathElement, n) => {
                return <Button
                    key={n}
                    $variant='secondary'
                    onClick={() => dispatch(setTreeLocation(pathElement.id))}
                >
                    <img src={iconFolder} alt='Folder' />

                    {pathElement.name}
                </Button>
            })
        }</>}

    ></StyledCurrentFolderButton>
}

export default CurrentFolderButton