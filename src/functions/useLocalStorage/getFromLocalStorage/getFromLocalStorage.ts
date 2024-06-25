const getFromLocalStorage = <T>(key: string): T | null => {
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
        try { return JSON.parse(storedValue) as T }
        catch (error) { return null }
    }

    return null
}

export default getFromLocalStorage