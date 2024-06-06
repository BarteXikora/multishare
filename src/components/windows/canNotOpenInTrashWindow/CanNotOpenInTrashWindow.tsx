import Button from '../../ui/button/Button'

import iconRestore from '../../../assets/icons/icon-restore.svg'

const CanNotOpenInTrashWindow = () => {
    return <>
        <section>
            <h2>Nie można wyświetlić tego elementu, gdyż znajduje się on w koszu.</h2>

            <p>Aby wyświetlić ten element należy najpierw go przywrócić.</p>
        </section>

        <section className="actions">
            <Button $variant='secondary'>
                Anuluj
            </Button>

            <Button>
                <img src={iconRestore} alt='Przywróć' />

                Przywróć ten element
            </Button>
        </section>
    </>
}

export default CanNotOpenInTrashWindow