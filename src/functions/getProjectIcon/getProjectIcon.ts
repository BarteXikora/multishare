/**
 * getProjectIcon function
 * 
 * This function determines the appropriate icon for a project based on the given project icon type.
 * It returns an object containing the type and content of the icon, which can be an image link or a default icon.
 * 
 * Assumptions:
 * - If the icon is null or undefined, it defaults to a generic project icon.
 * - If the icon type is 'LINK', it uses the provided link.
 * - If the icon is 'PERSONAL_PROJECT', it uses a specific personal project icon.
 **/

import { projectIconType } from '../../store/features/userSlice/userSlice.types'

import imgPersonalProject from '../../assets/images/img-personal-project.svg'
import imgProject from '../../assets/images/img-project.svg'

type getProjectIconType = {
    type: 'ICON' | 'IMAGE',
    content: string,
}

const getProjectIcon = (icon: projectIconType | null | undefined): getProjectIconType => {

    // Checking if the icon is null or undefined and returning a default project icon:
    if (!icon) return { type: 'ICON', content: imgProject }

    // Checking if the icon type is 'LINK' and returning the image link:
    if (icon.type === 'LINK') return { type: 'IMAGE', content: icon.link }

    // Checking if the icon is 'PERSONAL_PROJECT' and returning the personal project icon:
    if (icon.icon === 'PERSONAL_PROJECT') return { type: 'ICON', content: imgPersonalProject }

    // Returning the default project icon if none of the above conditions are met:
    return { type: 'ICON', content: imgProject }
}

export default getProjectIcon