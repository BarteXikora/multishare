import StyledPath from './Path.styles'
import Button from '../../../ui/button/Button'
import iconArrow from '../../../../assets/icons/icon-arrow-right.svg'

const Path = ({ path }: { path: string[] }) => {
    return <StyledPath>
        {
            path.map((pathElement, n) => {
                if (path.length <= 4 || (path.length > 4 && n > path.length - 3))
                    return <>
                        <Button key={n} $variant='tertiary'>{pathElement}</Button>

                        {n < path.length - 1 && <img src={iconArrow} alt="/" />}
                    </>

                return <></>
            })
        }
    </StyledPath>
}

export default Path