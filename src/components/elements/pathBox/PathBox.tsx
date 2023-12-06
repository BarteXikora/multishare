import StyledPathBox from './PathBox.styles'
import Button from '../../ui/button/Button'
import iconBack from '../../../assets/icons/icon-back.svg'
import iconArrow from '../../../assets/icons/icon-arrow-right.svg'

const PathBox = () => {
    return <StyledPathBox>
        <Button $variant='tertiary'>
            <img src={iconBack} alt="Cofnij" />
        </Button>

        <Button className='path-element' $variant='tertiary'>Moje pliki</Button>

        <img src={iconArrow} alt="/" />

        <Button className='path-element' $variant='tertiary'>Prywatne</Button>

        <img src={iconArrow} alt="/" />

        <Button className='path-element' $variant='tertiary'>Obrazy</Button>

        <img src={iconArrow} alt="/" />

        <Button className='path-element' $variant='tertiary'>Wycieczka na rowery 2023</Button>
    </StyledPathBox>
}

export default PathBox