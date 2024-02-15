import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useInvokeDetails from '../../../functions/useInvokeDetails/useInvokeDetails'

import StyledDetailsSection from './DetailsSection.styles'
import Button from '../../ui/button/Button'

import DropSection from './dropSection/DropSection'
import SingleFolderDetails from './singleFolderDetails/SingleFolderDetails'
import SingleFileDetails from './singleFileDetails/SingleFileDetails'
import ProcessPill from '../../elements/processPill/ProcessPill'

import iconClose from '../../../assets/icons/icon-close.svg'

const DetailsSection = () => {
    const isShown = useSelector(state => state.detailsSection.isShown)
    const content = useSelector(state => state.detailsSection.content)
    const dispatch = useDispatch()

    useInvokeDetails()

    return <StyledDetailsSection className={`${isShown ? 'shown' : ''}`}>

        <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
            <img src={iconClose} alt='Zamknij szczegóły' />
        </Button>

        <section className="main-content">
            {
                content.type === 'EMPTY' ?
                    <DropSection />
                    :
                    content.type === 'FOLDER' ?
                        <SingleFolderDetails data={content.data} />
                        :
                        content.type === 'FILE' ?
                            <SingleFileDetails data={content.data} />
                            :
                            null
            }
        </section>

        <div className="process-pill">
            <ProcessPill />
        </div>
    </StyledDetailsSection>
}

export default DetailsSection