import { render, screen, act } from '../../../../test-utils'
import user from '@testing-library/user-event'

import BackButton from './BackButton'

import { store } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

describe('Back Button', () => {

    test('renders correctly', () => {
        render(<BackButton isHome={false} />)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })

    test('button changes stored location on click', async () => {
        user.setup()

        act(() => {
            store.dispatch(setTreeLocation(3))
        })

        render(<BackButton isHome={false} />)
        const buttonElement = screen.getByRole('button')

        await user.click(buttonElement)

        expect(store.getState().content.currentPath[0].id).toBe(0)
    })

})
