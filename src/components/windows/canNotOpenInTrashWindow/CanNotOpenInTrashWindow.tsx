import StyledCanNotOpenInTrashWindow from './CanNotOpenInTrashWindow.styles'
import Button from '../../ui/button/Button'

import iconRestore from '../../../assets/icons/icon-restore.svg'

const CanNotOpenInTrashWindow = ({ data }: { data: any }) => {
    const type = data?.type
    const id = data?.id

    return <StyledCanNotOpenInTrashWindow>
        <section className="info-section">
            <h2>Nie można wyświetlić tego elementu, gdyż znajduje się on w koszu.</h2>

            <p>
                Aby wyświetlić ten element należy najpierw go przywrócić.
            </p>
        </section>

        <section className="action-section">
            <Button $variant='secondary'>
                Anuluj
            </Button>

            {
                (type && id) && <Button>
                    <img src={iconRestore} alt='Przywróć' />

                    Przywróć ten element
                </Button>
            }
        </section>
    </StyledCanNotOpenInTrashWindow>
}

export default CanNotOpenInTrashWindow