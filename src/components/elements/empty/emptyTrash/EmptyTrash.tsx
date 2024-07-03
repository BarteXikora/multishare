/** 
 * Empty trash; information about no content in the trash
**/

import imgTrash from '../../../../assets/images/img-empty-trash.svg'

const EmptyTrash = () => {
    return <>
        <div className="image">
            <img src={imgTrash} alt='Pusty kosz' />
        </div>

        <div className="info">
            <h2>Kosz jest pusty!</h2>

            <p>Wszystko gotowe, w koszu nie ma żadnych plików, ani folderów.</p>
        </div>
    </>
}

export default EmptyTrash