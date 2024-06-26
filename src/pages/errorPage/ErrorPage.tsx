import { useNavigate } from 'react-router-dom'

import StyledErrorPage from './ErrorPage.styles'
import Button from '../../components/ui/button/Button'
import { IconError, IconReload } from '../../components/ui/icon/Icons'

const ErrorPage = ({ error }: { error: string }) => {
    const navigate = useNavigate()

    return <StyledErrorPage>
        <div className="icon"><IconError $color='wrong' $size='big' /></div>

        <div className="info">
            <h2>Wystąpił błąd!</h2>

            <p>{error}</p>

            <Button $variant='secondary' className='reload-button' onClick={() => navigate(0)}>
                <IconReload />

                Spróbuj ponownie
            </Button>
        </div>
    </StyledErrorPage>
}

export default ErrorPage