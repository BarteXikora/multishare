import { useState, useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { uploadFiles } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledUploadWindow from './UploadWindow.styles'
import DropArea from '../../elements/dropArea/DropArea'

const UploadWindow = () => {
    const dispatch = useDispatch()

    const [files, setFiles] = useState<FileList | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    useEffect(() => { if (!files) setLocation(null) }, [files])

    const handleUpload = () => {
        if (!files || !location) return

        const filesToUpload = Array.from(files).map(f => {
            let currentFileName = f.name.split('.').slice(0, -1).join('')

            return {
                file: new File([f], f.name),
                name: currentFileName,
                extension: f.name.split('.').pop() || null
            }
        })

        dispatch(uploadFiles({ location, data: filesToUpload }))

        setFiles(null)

        dispatch(closeWindow())
    }

    return <StyledUploadWindow>
        <DropArea filesState={[files, setFiles]} locationState={[location, setLocation]} upload={handleUpload} />
    </StyledUploadWindow>
}

export default UploadWindow