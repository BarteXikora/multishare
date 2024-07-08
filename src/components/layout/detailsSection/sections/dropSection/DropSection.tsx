/** 
 * Drop section
 * 
 * Used in the NothingSelectedDetails component. It displays the DropArea component and provides
 * its functionality.
**/

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../../../store/store'
import { addFiles } from '../../../../../store/features/uploadListSlice/uploadListSlice'
import getFilesToUpload from '../../../../../functions/getFilesToUpload/getFilesToUpload'

import StyledDropSection from './DropSection.styles'
import AnimatedDropSection from './DropSection.animation'
import DropArea from '../../../../elements/dropArea/DropArea'

const DropSection = () => {
    const dispatch = useDispatch()

    const currentPath = useSelector(state => state.content.currentPath)

    const [files, setFiles] = useState<File[] | null>(null)
    const [location, setLocation] = useState<number | null>(null)

    // Setting upload location when current path changes; the functionality of the drop area in the drop
    // section is to upload files to the selected location w/o showing the LocationSelector component:
    useEffect(() => {
        const currentLocation = currentPath.length > 0 ? currentPath[currentPath.length - 1].id : -1
        setLocation(currentLocation)

    }, [currentPath])

    // Handling upload:
    const handleUpload = async () => {
        const filesToUpload = await getFilesToUpload(files, location)

        if (filesToUpload === false) return

        dispatch(addFiles(filesToUpload))
        setFiles(null)
    }

    // Rendering the component:
    return <StyledDropSection>
        <AnimatedDropSection>
            <DropArea
                filesState={[files, setFiles]}
                locationState={[location, setLocation]}
                upload={handleUpload}
                showLocationSelector={false}
                showSelectButton={false}
            />
        </AnimatedDropSection>
    </StyledDropSection>
}

export default DropSection