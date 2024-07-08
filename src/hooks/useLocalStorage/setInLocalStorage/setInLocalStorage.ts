/**
 * setInLocalStorage function
 * 
 * It sets items in the local storage.
**/

const setInLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export default setInLocalStorage