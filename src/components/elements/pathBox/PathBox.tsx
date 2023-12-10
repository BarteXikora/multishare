import StyledPathBox from './PathBox.styles'
import Button from '../../ui/button/Button'
import CollapsedPathButton from './collapsedPathButton/CollapsedPathButton'
import PathButton from './pathButton/PathButton'

import iconBack from '../../../assets/icons/icon-back.svg'
import iconHome from '../../../assets/icons/icon-home.svg'
import iconArrow from '../../../assets/icons/icon-arrow-right.svg'

const __currentPath = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery 2023']

const PathBox = () => {
    return <StyledPathBox>
        <Button $variant='tertiary'>
            {
                __currentPath.length > 1 ?
                    <img src={iconBack} alt="Cofnij" />
                    :
                    <img src={iconHome} alt="Folder główny" />
            }

        </Button>

        <CollapsedPathButton
            path={__currentPath}
            isPathCollapsed={__currentPath.length > 4}
        />

        {
            __currentPath.length > 4 && <div className='collapsed-path-separator'>
                <span>...</span>

                <img src={iconArrow} alt="/" />
            </div>
        }

        <div className="path">
            {
                __currentPath.map((path, n) => {
                    if (__currentPath.length <= 4 || (__currentPath.length > 4 && n > __currentPath.length - 3))
                        return <PathButton
                            key={n}
                            displayName={path}
                            isLast={n === __currentPath.length - 1}
                        />

                    return ''
                })
            }
        </div>
    </StyledPathBox>
}

export default PathBox


/*
<div className="path">
            {
                __currentPath.map((path, n) => {
                    return <PathButton
                        key={n}
                        displayName={path}
                        isLast={n === __currentPath.length - 1}
                    />
                })
            }
        </div>
*/