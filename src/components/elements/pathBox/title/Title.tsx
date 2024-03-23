import StyledTitle from './Title.styles'

import iconFiles from '../../../../assets/icons/icon-files.svg'

const Title = () => {
    return <StyledTitle>
        <img src={iconFiles} alt='Wszystkie pliki' />

        <h2>Wszystkie pliki:</h2>
    </StyledTitle>
}

export default Title