import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../../../store/store'
import { addFiles } from '../../../../../store/features/uploadListSlice/uploadListSlice'
import getFilesToUpload from '../../../../../functions/getFilesToUpload/getFilesToUpload'

import StyledDropSection from './DropSection.styles'
import DropArea from '../../../../elements/dropArea/DropArea'

const DropSection = () => {
    const dispatch = useDispatch()

    const currentPath = useSelector(state => state.content.currentPath)

    const [files, setFiles] = useState<File[] | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    useEffect(() => {
        const currentLocation = currentPath.length > 0 ? currentPath[currentPath.length - 1].id : -1
        setLocation(currentLocation)

    }, [currentPath])

    const handleUpload = () => {
        const filesToUpload = getFilesToUpload(files, location)

        if (filesToUpload === false) return

        dispatch(addFiles(filesToUpload))
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