import StyledCollapsedPathButton from './CollapsedPathButton.styles'
import Button from '../../../ui/button/Button'

import getShortenName from '../../../../functions/getShortenName/getShortenName'

import iconFolder from '../../../../assets/icons/icon-project.svg'

type CollapsedPathButtonProps = {
    path: string[]
    isPathCollapsed: boolean
    maxFolderNameLength: number
}

const CollapsedPathButton = ({ path, isPathCollapsed, maxFolderNameLength }: CollapsedPathButtonProps) => {
    return <StyledCollapsedPathButton
        className={`collapsed-path-button ${isPathCollapsed ? 'path-collapsed' : ''}`}

        buttonOptions={{
            $variant: 'tertiary'
        }}

        buttonContent={<>
            <div className="desktop">Wyświetl ścieżkę</div>

            <div className="mobile">
                {getShortenName(path[path.length - 1], maxFolderNameLength)}
            </div>
        </>}

        dropdownContent={<>{
            path.map((element, n) => <Button key={n} $variant='secondary'>
                <img src={iconFolder} alt='Folder' />

                {getShortenName(element, maxFolderNameLength)}
            </Button>)
        }</>}
    />
}

export default CollapsedPathButton