/** 
 * Preview top bar
 * 
 * This is the top bar for the FilePage. It displays the files name and the
 * go back button.
**/

import { useNavigate } from 'react-router-dom'

import StyledPreviewTopBar from './PreviewTopBar.styles'
import Button from '../../ui/button/Button'
import { IconBack } from '../../ui/icon/Icons'

const PreviewTopBar = ({ name, extension }: { name: string, extension: string }) => {
    const navigate = useNavigate()

    // Rendering the component:
    return <StyledPreviewTopBar>
        <div className="content">
            <div className="file-name-section">
                <Button $variant='tertiary' onClick={() => navigate(-1)}>
                    <IconBack />
                </Button>

                <h2>{name}<span className='extension'>.{extension.toLocaleLowerCase()}</span></h2>
            </div>
        </div>
    </StyledPreviewTopBar>
}

export default PreviewTopBar