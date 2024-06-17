import { useState, useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import DropArea from '../../elements/dropArea/DropArea'

const UploadWindow = () => {
    const dispatch = useDispatch()

    const [files, setFiles] = useState<File[] | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    useEffect(() => { if (!files) setLocation(null) }, [files])

    const handleUpload = () => {
        if (!files || !location) return

        const filesToUpload = files.map(f => {
            let currentFileName = f.name.split('.').slice(0, -1).join('')

            return {
                file: new File([f], f.name),
                name: currentFileName,
                extension: f.name.split('.').pop() || null
            }
        })

        // dispatch(uploadFiles({ location, data: filesToUpload }))

        setFiles(null)

        dispatch(closeWindow())
    }

    return <section>
        <DropArea filesState={[files, setFiles]} locationState={[location, setLocation]} upload={handleUpload} />
    </section>
}

export default UploadWindow