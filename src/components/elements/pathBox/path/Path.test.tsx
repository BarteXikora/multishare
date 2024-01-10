import { render, screen, act } from '../../../../test-utils'
import user from '@testing-library/user-event'

import Path from './Path'

import { store } from '../../../../store/store'
import { setTreeLocation } from '../../../../store/features/contentSlice/contentSlice'

describe('Path', () => {

    test('renders all buttons for path with 4 elements', () => {
        const path = [{ id: 1, name: 'test-1' }, { id: 2, name: 'test-2' }, { id: 3, name: 'test-3' }, { id: 4, name: 'test-4' }]

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(4)
    })

    test('renders 3 buttons for path with more than 4 elements', () => {
        const path = [{ id: 1, name: 'test-1' }, { id: 2, name: 'test-2' }, { id: 3, name: 'test-3' }, { id: 4, name: 'test-4' }, { id: 5, name: 'test-5' }]

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(3)
    })

    test('changes stored location on click', async () => {
        user.setup()

        act(() => {
            store.dispatch(setTreeLocation(5))
        })

        render(<Path path={store.getState().content.currentPath} />)

        const picturesButtonElement = screen.getByRole('button', { name: /Obrazy/ })

        await user.click(picturesButtonElement)

        expect(store.getState().content.currentPath).toHaveLength(2)
    })

})