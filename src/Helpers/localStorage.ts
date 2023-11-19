export const LOCAL_STORAGE_SEARCH_VALUE = "searchValue";
export const LOCAL_STORAGE_SEARCH_PAGE = "searchPage";
export const LOCAL_STORAGE_SEARCH_LIMIT = "searchLimit";

export function setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
    return localStorage.getItem(key);
}