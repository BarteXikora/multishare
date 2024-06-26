import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StyledNotFoundPage from './NotFoundPage.styles'
import Button from '../../components/ui/button/Button'
import { IconHome } from '../../components/ui/icon/Icons'

import logo from '../../assets/images/img-logo-dark.svg'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const [time, setTime] = useState<number>(5)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (time === 1) navigate('/')
            else setTime(time - 1)

        }, 1000)

        return () => clearTimeout(timeout)

    }, [time, navigate])

    return <StyledNotFoundPage>
        <div className="content">
            <img src={logo} alt='Logo multishare' className='logo' />

            <h1>Nie znaleziono strony!</h1>

            <p>Przekierowywanie na stronę główną za <b>{time}</b> s.</p>

            <Button $size='big' onClick={() => navigate('/')}>
                <IconHome />

                Wróć na stronę główną
            </Button>
        </div>
    </StyledNotFoundPage>
}

export default NotFoundPage