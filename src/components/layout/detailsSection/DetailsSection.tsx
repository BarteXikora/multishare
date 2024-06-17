import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useInvokeDetails from '../../../functions/useInvokeDetails/useInvokeDetails'

import StyledDetailsSection from './DetailsSection.styles'
import NothingSelectedDetails from './detailsTypes/nothingSelectedDetails/NothingSelectedDetails'
import SingleFolderDetails from './detailsTypes/singleFolderDetails/SingleFolderDetails'
import SingleFileDetails from './detailsTypes/singleFileDetails/SingleFileDetails'
import MultipleDetails from './detailsTypes/multipleDetails/MultipleDetails'
import Button from '../../ui/button/Button'

import iconClose from '../../../assets/icons/icon-close.svg'



import UploadList from '../uploadList/UploadList'



const DetailsSection = () => {
    const project = useSelector(state => state.project.selectedProject)
    const isHomeFolder = useSelector(state => state.content.currentPath.length === 0)
    const isShown = useSelector(state => state.detailsSection.isShown)
    const content = useSelector(state => state.detailsSection.content)

    const dispatch = useDispatch()

    useInvokeDetails()

    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>

        <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
            <img src={iconClose} alt='Zamknij szczegóły' />
        </Button>

        <section className="main">
            {content.type === 'EMPTY' && <NothingSelectedDetails isHomeFolder={isHomeFolder} project={project} />}
            {content.type === 'FOLDER' && <SingleFolderDetails content={content} />}
            {content.type === 'FILE' && <SingleFileDetails content={content} />}
            {content.type === 'MULTIPLE' && <MultipleDetails content={content} />}
        </section>




        <UploadList />




    </StyledDetailsSection>
}

export default DetailsSection