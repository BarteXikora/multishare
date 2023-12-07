import getPreviewImage from './getPreviewImage'

describe('getPreviewImage function', () => {

    test('returns string for an empty extension input', () => {
        expect(getPreviewImage(false, '').split('').length).toBeGreaterThan(5)
    })

})