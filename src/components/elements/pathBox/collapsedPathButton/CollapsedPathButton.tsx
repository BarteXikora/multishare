import { useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledCollapsedPathButton from './CollapsedPathButton.styles'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import { pathType } from '../../../../store/features/contentSlice/contentSlice.types'

import iconFolder from '../../../../assets/icons/icon-folder-dark.svg'
import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

const CollapsedPathButton = ({ path }: { path: pathType }) => {
    const dispatch = useDispatch()

    return <StyledCollapsedPathButton>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'

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
        />

        <span className="separator">...</span>

        <img src={iconArrow} alt='/' />
    </StyledCollapsedPathButton>
}

export default CollapsedPathButton