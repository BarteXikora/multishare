import { useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

import StyledContentSection from './ContentSection.styles'

import ContentIconsView from './contentIconsView/ContentIconsView'

const ContentSection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTreeLocation(-1))

    }, [dispatch])

    return <StyledContentSection>
        <ContentIconsView />
    </StyledContentSection>
}

export default ContentSection