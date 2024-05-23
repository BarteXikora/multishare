import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../../../store/store'
import { uploadFiles } from '../../../../../store/features/contentSlice/contentSlice'

import StyledDropSection from './DropSection.styles'
import DropArea from '../../../../elements/dropArea/DropArea'

const DropSection = () => {
    const dispatch = useDispatch()

    const currentPath = useSelector(state => state.content.currentPath)

    const [files, setFiles] = useState<FileList | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    useEffect(() => {
        const currentLocation = currentPath.length > 0 ? currentPath[currentPath.length - 1].id : -1
        setLocation(currentLocation)

    }, [currentPath])

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
    }

    return <StyledDropSection>
        <DropArea
            filesState={[files, setFiles]}
            locationState={[location, setLocation]}
            upload={handleUpload}
            showLocationSelector={false}
            showSelectButton={false}
        />
    </StyledDropSection>
}

export default DropSection