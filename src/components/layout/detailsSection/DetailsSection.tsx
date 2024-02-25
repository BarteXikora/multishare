import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useInvokeDetails from '../../../functions/useInvokeDetails/useInvokeDetails'

import StyledDetailsSection from './DetailsSection.styles'
import NothingSelectedDetails from './detailsTypes/nothingSelectedDetails/NothingSelectedDetails'
import SingleFolderDetails from './detailsTypes/singleFolderDetails/SingleFolderDetails'
import SingleFileDetails from './detailsTypes/singleFileDetails/SingleFileDetails'
import MultipleDetails from './detailsTypes/multipleDetails/MultipleDetails'
import Button from '../../ui/button/Button'
import ProcessPill from '../../elements/processPill/ProcessPill'

import iconClose from '../../../assets/icons/icon-close.svg'

const DetailsSection = () => {
    const project = useSelector(state => state.content.project)
    const isHomeFolder = useSelector(state => state.content.currentPath.length === 0)
    const isShown = useSelector(state => state.detailsSection.isShown)
    const content = useSelector(state => state.detailsSection.content)

    const dispatch = useDispatch()

    useInvokeDetails()

    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>

        <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
            <img src={iconClose} alt='Zamknij szczegóły' />
        </Button>

        <section className='main-content'>
            {content.type === 'EMPTY' && <NothingSelectedDetails isHomeFolder={isHomeFolder} project={project} />}
            {content.type === 'FOLDER' && <SingleFolderDetails content={content} />}
            {content.type === 'FILE' && <SingleFileDetails content={content} />}
            {content.type === 'MULTIPLE' && <MultipleDetails content={content} />}
        </section>

        <div className="process-pill">
            <ProcessPill />
        </div>
    </StyledDetailsSection>
}

export default DetailsSection