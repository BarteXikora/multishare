const ELEMENT_NAME_LENGTH = { MIN: 5, MAX: 50 }

const validateName = (name) => {
    if (name.length >= ELEMENT_NAME_LENGTH.MIN && name.length <= ELEMENT_NAME_LENGTH.MAX) return true
    return false
}

module.exports = { validateName, ELEMENT_NAME_LENGTH }