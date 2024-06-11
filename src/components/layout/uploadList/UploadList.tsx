import StyledUploadList from './UploadList.styles'
import Button from '../../ui/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'
import iconUploading from '../../../assets/icons/icon-uploading.svg'
import iconOK from '../../../assets/icons/icon-ok-color.svg'

const UploadList = () => {
    return <StyledUploadList className='_collapsed'>
        <section className="bar">
            <h2>
                <img src={iconUpload} alt='Przesyłanie plików' />

                Przesyłanie plików...
            </h2>

            <Button $variant='tertiary'>
                <img src={iconArrow} alt='Pokaż / ukryj listę' />
            </Button>
        </section>

        <section className="main">
            <div className="file">
                <div className='file-name'>Nazwa pliku<span className='extension'>.txt</span></div>
                <div className='status'><img src={iconOK} alt='Przesłano' /></div>
            </div>

            <div className="file">
                <div className='file-name'>Nazwa pliku<span className='extension'>.txt</span></div>
                <div className='status'><img src={iconUploading} alt='Przesyłanie...' /></div>
            </div>
        </section>
    </StyledUploadList>
}

export default UploadList