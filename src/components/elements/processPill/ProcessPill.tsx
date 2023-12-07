import StyledProcessPill from './ProcessPill.styles'

import iconOK from '../../../assets/icons/icon-ok-color.svg'

const ProcessPill = () => {
    return <StyledProcessPill>
        <img src={iconOK} alt='Wszystko aktualne' />

        Wszystko aktualne!
    </StyledProcessPill>
}

export default ProcessPill