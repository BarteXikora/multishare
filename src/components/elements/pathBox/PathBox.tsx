import StyledPathBox from './PathBox.styles'
import Button from '../../ui/button/Button'
import iconBack from '../../../assets/icons/icon-back.svg'
import PathButton from './pathButton/PathButton'

const __currentPath = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery 2023']

const PathBox = () => {
    return <StyledPathBox>
        <Button $variant='tertiary'>
            <img src={iconBack} alt="Cofnij" />
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