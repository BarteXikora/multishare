import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { removeFiles } from '../../../store/features/uploadListSlice/uploadListSlice'

import StyledUploadList from './UploadList.styles'
import Button from '../../ui/button/Button'
import CircleProgress from '../../ui/circleProgress/CircleProgress'
import { IconUpload, IconArrowDown, IconOK } from '../../ui/icon/Icons'

const UploadList = () => {
    const dispatch = useDispatch()

    const uploadList = useSelector(state => state.uploadList)

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const [isAllDone, setIsAllDone] = useState<boolean>(false)

    useEffect(() => {
        if (uploadList.filter(file => file.status !== 'DONE').length === 0) {
            setIsAllDone(true)

            setTimeout(() => {
                dispatch(removeFiles(uploadList.map(file => file.uploadId)))

            }, 3000)
        }

        else setIsAllDone(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadList])

    if (uploadList.length === 0) return null

    return <StyledUploadList className={(isCollapsed || isAllDone) ? 'collapsed' : ''}>
        <section className="bar">
            {
                isAllDone ?
                    <h2>
                        <IconOK />

                        Przesłano pliki ({uploadList.length})
                    </h2>

                    :

                    <>
                        <h2>
                            <IconUpload />

                            Przesyłanie plików...
                        </h2>

                        <Button $variant='tertiary' onClick={() => setIsCollapsed(!isCollapsed)}>
                            <IconArrowDown />
                        </Button>
                    </>
            }
        </section>

        <section className="main">
            {
                uploadList.map(file => <div key={file.uploadId} className="file">
                    <div className='file-name'>
                        {file.name}<span className='extension'>.{file.extension.toLocaleLowerCase()}</span>
                    </div>

                    <div
                        className='status'
                        title={
                            file.status === 'WAITING' ?
                                'Oczekuje...' : file.status === 'UPLOADING' ?
                                    `(${file.uploadPercent}%) - Przesyłanie...` : 'Przesłano'
                        }
                    >
                        {
                            file.status === 'WAITING' ?
                                null // <img src={iconWaiting} alt='Oczekuje...' />
                                :
                                file.status === 'UPLOADING' ?
                                    <CircleProgress $percent={file.uploadPercent} />
                                    :
                                    <IconOK $color='dark' />
                        }
                    </div>
                </div>)
            }
        </section>
    </StyledUploadList>
}

export default UploadList