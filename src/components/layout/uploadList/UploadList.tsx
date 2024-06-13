import { useSelector } from '../../../store/store'

import StyledUploadList from './UploadList.styles'
import Button from '../../ui/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'
import iconWaiting from '../../../assets/icons/icon-waiting.svg'
import iconUploading from '../../../assets/icons/icon-upload-color.svg'
import iconDone from '../../../assets/icons/icon-ok-color.svg'

const UploadList = () => {
    const uploadList = useSelector(state => state.uploadList)

    if (uploadList.length === 0) return null

    return <StyledUploadList>
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
            {
                uploadList.map(file => <div key={file.id} className="file">
                    <div className='file-name'>
                        {file.name}<span className='extension'>.{file.extension.toLocaleLowerCase()}</span>
                    </div>

                    <div className='status' title={file.status === 'WAITING' ? 'Oczekuje...' : file.status === 'UPLOADING' ? 'Przesyłanie...' : 'Przesłano'}>
                        {
                            file.status === 'WAITING' ?
                                <img src={iconWaiting} alt='Oczekuje...' />
                                :
                                file.status === 'UPLOADING' ?
                                    <img src={iconUploading} alt='Przesyłanie...' />
                                    :
                                    <img src={iconDone} alt='Przesłano' />
                        }
                    </div>
                </div>)
            }
        </section>
    </StyledUploadList>
}

export default UploadList