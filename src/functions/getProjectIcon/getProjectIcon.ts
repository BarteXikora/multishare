import { projectIconType } from '../../store/features/userSlice/userSlice.types'

import imgPersonalProject from '../../assets/images/img-personal-project.svg'
import imgProject from '../../assets/images/img-project.svg'

type getProjectIconType = {
    type: 'ICON' | 'IMAGE'
    content: string,
}

const getProjectIcon = (icon: projectIconType | null | undefined): getProjectIconType => {
    if (!icon) return { type: 'ICON', content: imgProject }
    if (icon.type === 'LINK') return { type: 'IMAGE', content: icon.link }
    if (icon.icon === 'PERSONAL_PROJECT') return { type: 'ICON', content: imgPersonalProject }

    return { type: 'ICON', content: imgProject }
}

export default getProjectIcon