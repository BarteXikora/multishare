/** 
 * The UI spinner component; displays loading animation
**/

import StyledSpinner from './Spinner.styles'

const Spinner = () => {
    return <StyledSpinner>
        <div className="spinner-element"></div>
        <div className="spinner-element"></div>
        <div className="spinner-element"></div>
        <div className="spinner-element"></div>
    </StyledSpinner>
}

export default Spinner