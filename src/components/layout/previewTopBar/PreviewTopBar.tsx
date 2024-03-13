import { useNavigate } from 'react-router-dom'

import StyledPreviewTopBar from './PreviewTopBar.styles'
import Button from '../../ui/button/Button'
import SelectedTools from '../../elements/contentTools/contentToolsSections/SelectedTools'

import iconBack from '../../../assets/icons/icon-back.svg'

const PreviewTopBar = ({ name, extension }: { name: string, extension: string }) => {
    const navigate = useNavigate()

    return <StyledPreviewTopBar>
        <div className="content">
            <div className="file-name-section">
                <Button $variant='tertiary' onClick={() => navigate(-1)}>
                    <img src={iconBack} alt='Wróć' />
                </Button>

                <h2>{name}<span className='extension'>.{extension.toLocaleLowerCase()}</span></h2>
            </div>

            <div className="tools-sction">
                <SelectedTools />
            </div>
        </div>
    </StyledPreviewTopBar>
}

export default PreviewTopBar