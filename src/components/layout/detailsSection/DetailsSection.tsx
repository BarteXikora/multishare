/** 
 * Details section; aside section showing informations about selcted elements and more
 * 
 * The component uses the store to decide what type of details section to display. It has
 * functionality of showing and hiding itself (on smaller screens) and it renders the 
 * UploadList component. 
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useInvokeDetails from '../../../hooks/useInvokeDetails/useInvokeDetails'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'

import StyledDetailsSection from './DetailsSection.styles'
import AnimatedDetailsSction from './DetailsSection.animation'
import NothingSelectedDetails from './detailsTypes/nothingSelectedDetails/NothingSelectedDetails'
import SingleFolderDetails from './detailsTypes/singleFolderDetails/SingleFolderDetails'
import SingleFileDetails from './detailsTypes/singleFileDetails/SingleFileDetails'
import MultipleDetails from './detailsTypes/multipleDetails/MultipleDetails'
import Button from '../../ui/button/Button'
import UploadList from '../uploadList/UploadList'
import { IconClose } from '../../ui/icon/Icons'

import { AnimatePresence } from 'framer-motion'

const DetailsSection = () => {
    const project = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject : null)
    const isShown = useSelector(state => state.detailsSection.isShown)
    const content = useSelector(state => state.detailsSection.content)

    const dispatch = useDispatch()

    const { screenNumberSize } = useScreenSize()

    // Handling showing and hiding the component:
    useEffect(() => {
        dispatch(toggle(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenNumberSize])

    // Calling the useInvokeDetails hook to update the detailsSecton slice when necessary:
    useInvokeDetails()

    // Rendering the component:
    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>
        <AnimatePresence>
            {
                (screenNumberSize >= 4 || isShown) && <AnimatedDetailsSction>

                    {/* Hiding component button: */}
                    <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
                        <IconClose />
                    </Button>

                    {/* Main section: */}
                    <section className="main">
                        {content.type === 'EMPTY' && <NothingSelectedDetails project={project} />}
                        {content.type === 'FOLDER' && <SingleFolderDetails content={content} />}
                        {content.type === 'FILE' && <SingleFileDetails content={content} />}
                        {content.type === 'MULTIPLE' && <MultipleDetails content={content} />}
                    </section>

                    {/* Upload list - for extra big screen to be inside the component */}
                    <section className="upload-list">
                        <UploadList />
                    </section>
                </AnimatedDetailsSction>
            }
        </AnimatePresence>

        {
            // Upload list - for smaller screens to be positioned absolute and always visible:
            !(screenNumberSize >= 4 || isShown) && <UploadList />
        }
    </StyledDetailsSection>
}

export default DetailsSection