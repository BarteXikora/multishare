import StyledPathButton from './PathButton.styles'
import Button from '../../../ui/button/Button'
import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

type PathButtonProps = {
    displayName: string
    isLast: boolean
}

const PathButton = ({ displayName, isLast }: PathButtonProps) => {
    return <StyledPathButton>
        <Button $variant='tertiary'>{displayName}</Button>

        {!isLast && <img src={iconArrow} alt="/" />}
    </StyledPathButton>
}

export default PathButton