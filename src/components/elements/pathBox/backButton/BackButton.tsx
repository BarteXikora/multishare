import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

import StyledBackButton from './BackButton.styles'

import iconBack from '../../../../assets/icons/icon-back.svg'
import iconHome from '../../../../assets/icons/icon-home.svg'

const BackButton = () => {
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    const [isHome, setIsHome] = useState<boolean>(true)
    const [previousID, setPreviousID] = useState<number>(-1)

    useEffect(() => {
        setIsHome(currentPath.length === 0)
        setPreviousID(currentPath.length > 1 ? currentPath[currentPath.length - 2].id : -1)

    }, [currentPath])

    return <StyledBackButton $variant='tertiary' onClick={() => !isHome ? dispatch(setTreeLocation(previousID)) : null}>
        {
            isHome ?
                <img src={iconHome} alt="Folder główny" />
                :
                <img src={iconBack} alt="Cofnij" />
        }
    </StyledBackButton>
}

export default BackButton