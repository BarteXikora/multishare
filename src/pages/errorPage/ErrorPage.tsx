import { useNavigate } from 'react-router-dom'

import StyledErrorPage from './ErrorPage.styles'
import Button from '../../components/ui/button/Button'

import iconError from '../../assets/icons/icon-error.svg'
import iconReload from '../../assets/icons/icon-reload.svg'

const ErrorPage = ({ error }: { error: string }) => {
    const navigate = useNavigate()

    return <StyledErrorPage>
        <div className="icon"><img src={iconError} alt='Wystąpił błąd!' /></div>

        <div className="info">
            <h2>Wystąpił błąd!</h2>

            <p>{error}</p>

            <Button $variant='secondary' className='reload-button' onClick={() => navigate(0)}>
                <img src={iconReload} alt='Odświerz' />

                Spróbuj ponownie
            </Button>
        </div>
    </StyledErrorPage>
}

export default ErrorPage