import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import StyledImagePreviewSection from './ImagePreviewSection.styles'
import Spinner from '../../../ui/spinner/Spinner'
import Button from '../../../ui/button/Button'
import { IconError, IconReload } from '../../../ui/icon/Icons'

const ImagePreviewSection = ({ data }: { data: string }) => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    if (isError) return <StyledImagePreviewSection>
        <div className="error">
            <IconError $color='wrong' $size='big' />

            <h3>Nie udało się załadować pliku.</h3>

            <Button onClick={() => navigate(0)}>
                <IconReload />

                Spróbuj ponownie
            </Button>
        </div>
    </StyledImagePreviewSection>

    return <StyledImagePreviewSection>
        {
            isLoading && <div className="loading">
                <Spinner />
            </div>
        }

        <div className="image">
            <img
                src={data}
                alt='Podgląd pliku'
                onLoad={() => setIsLoading(false)}
                onError={() => setIsError(true)}
            />
        </div>
    </StyledImagePreviewSection>
}

export default ImagePreviewSection