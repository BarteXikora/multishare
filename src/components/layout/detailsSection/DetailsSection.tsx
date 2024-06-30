import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useInvokeDetails from '../../../hooks/useInvokeDetails/useInvokeDetails'
import useScreenSize from '../../../functions/useScreenSize/useScreenSize'

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

    useEffect(() => {
        dispatch(toggle(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenNumberSize])

    useInvokeDetails()

    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>
        <AnimatePresence>
            {
                (screenNumberSize >= 4 || isShown) && <AnimatedDetailsSction>

                    <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
                        <IconClose />
                    </Button>

                    <section className="main">
                        {content.type === 'EMPTY' && <NothingSelectedDetails project={project} />}
                        {content.type === 'FOLDER' && <SingleFolderDetails content={content} />}
                        {content.type === 'FILE' && <SingleFileDetails content={content} />}
                        {content.type === 'MULTIPLE' && <MultipleDetails content={content} />}
                    </section>

                    <section className="upload-list">
                        <UploadList />
                    </section>
                </AnimatedDetailsSction>
            }
        </AnimatePresence>

        {
            !(screenNumberSize >= 4 || isShown) && <UploadList />
        }
    </StyledDetailsSection>
}

export default DetailsSection