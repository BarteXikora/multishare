import StyledCurrentFolderButton from './CurrentFolderButton.styles'
import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-project.svg'

const CurrentFolderButton = ({ path }: { path: string[] }) => {
    return <StyledCurrentFolderButton
        buttonOptions={{ $variant: 'tertiary' }}
        showArrow={false}

        buttonContent={path[path.length - 1]}

        dropdownContent={<>{
            path.map((pathElement, n) => {
                return <Button key={n} $variant='secondary'>
                    <img src={iconFolder} alt='Folder' />

                    {pathElement}
                </Button>
            })
        }</>}

    ></StyledCurrentFolderButton>
}

export default CurrentFolderButton