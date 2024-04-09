import { displayTypeType } from '../../store/features/contentSlice/contentSlice.types'

const getDisplayTypeFromPathname = (pathname: string): displayTypeType => {
    if (/\/files/.test(pathname)) return 'FILES'
    if (/\/trash/.test(pathname)) return 'TRASH'

    return 'TREE'
}

export default getDisplayTypeFromPathname