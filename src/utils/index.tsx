export const setSessionStorageItem = (itemName:string,value:string) => {
    sessionStorage && sessionStorage.setItem(itemName, value);
}


export const getSessionStorageItem = (itemName:string) => {
    return sessionStorage ? sessionStorage.getItem(itemName) : ''
}