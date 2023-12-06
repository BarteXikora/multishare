import StyledPathBox from './PathBox.styles'
import Button from '../../ui/button/Button'
import PathButton from './pathButton/PathButton'

import iconBack from '../../../assets/icons/icon-back.svg'
import iconHome from '../../../assets/icons/icon-home.svg'

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

        {
            __currentPath.map((path, n) => {
                return <PathButton
                    key={n}
                    displayName={path}
                    isLast={n === __currentPath.length - 1}
                />
            })
        }
    </StyledPathBox>
}

export default PathBox