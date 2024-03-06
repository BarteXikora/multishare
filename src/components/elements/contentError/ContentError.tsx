import StyledContentError from './ContentError.styles'

import iconError from '../../../assets/icons/icon-error.svg'

const ContentError = ({ error }: { error: string }) => {
    return <StyledContentError>
        <div className="icon"><img src={iconError} alt='Wystąpił błąd!' /></div>

        <div className="info">
            <h2>Wystąpił błąd!</h2>

            <p>{error}</p>
        </div>
    </StyledContentError>
}

export default ContentError