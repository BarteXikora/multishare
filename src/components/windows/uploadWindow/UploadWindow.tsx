import { useState, useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import getFilesToUpload from '../../../functions/getFilesToUpload/getFilesToUpload'
import { addFiles } from '../../../store/features/uploadListSlice/uploadListSlice'

import DropArea from '../../elements/dropArea/DropArea'

const UploadWindow = () => {
    const dispatch = useDispatch()

    const [files, setFiles] = useState<File[] | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    useEffect(() => { if (!files) setLocation(null) }, [files])

    const handleUpload = () => {
        const filesToUpload = getFilesToUpload(files, location)

        if (filesToUpload === false) return

        dispatch(addFiles(filesToUpload))
        setFiles(null)

        dispatch(closeWindow())
    }

    return <section>
        <DropArea filesState={[files, setFiles]} locationState={[location, setLocation]} upload={handleUpload} />
    </section>
}

export default UploadWindow