import StyledCollapsedPathButton from './CollapsedPathButton.styles'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-project.svg'
import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

const CollapsedPathButton = ({ path }: { path: string[] }) => {
    return <StyledCollapsedPathButton>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'

            dropdownContent={<>{
                path.map((pathelement, n) => {
                    return <Button $variant='secondary'>
                        <img src={iconFolder} alt='Folder' />

                        {pathelement}
                    </Button>
                })
            }</>}
        />

        <span className="separator">...</span>

        <img src={iconArrow} alt='/' />
    </StyledCollapsedPathButton>
}

export default CollapsedPathButton