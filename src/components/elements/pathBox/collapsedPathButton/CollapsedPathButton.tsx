import StyledCollapsedPathButton from './CollapsedPathButton.styles'
import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-project.svg'

type CollapsedPathButtonProps = {
    path: string[]
    isPathCollapsed: boolean
}

const CollapsedPathButton = ({ path, isPathCollapsed }: CollapsedPathButtonProps) => {
    return <StyledCollapsedPathButton
        className={`collapsed-path-button ${isPathCollapsed ? 'path-collapsed' : ''}`}

        buttonOptions={{
            $variant: 'tertiary'
        }}

        buttonContent={<>
            <div className="desktop">Wyświetl ścieżkę</div>

            <div className="mobile">{path[path.length - 1]}</div>
        </>}

        dropdownContent={<>{
            path.map((element, n) => <Button key={n} $variant='secondary'>
                <img src={iconFolder} alt="" />

                {element}
            </Button>)
        }</>}
    />
}

export default CollapsedPathButton