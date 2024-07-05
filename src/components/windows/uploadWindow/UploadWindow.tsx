/** 
 * Upload window
 * 
 * The window is shown when user wants to upload files. It dispalys the DropArea cmponent.
**/

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

    // Clearing the selected location when files list is empty:
    useEffect(() => { if (!files) setLocation(null) }, [files])

    // Handling upload:
    const handleUpload = async () => {
        const filesToUpload = await getFilesToUpload(files, location)

        if (filesToUpload === false) return

        dispatch(addFiles(filesToUpload))
        setFiles(null)

        dispatch(closeWindow())
    }

    // Rendering the component:
    return <section>
        <DropArea filesState={[files, setFiles]} locationState={[location, setLocation]} upload={handleUpload} />
    </section>
}

export default UploadWindow