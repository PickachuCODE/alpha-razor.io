import { createContext, useContext} from "react";
// For offline Ref
const LocalStorageManger = createContext({})
const useLocalStorage = () => useContext(LocalStorageManger)


const RazorLocalStorage =
    ({ children }) => {
    
    
    const storeThis =(dataInfo) => {
        localStorage.setItem("RazorLocalStorage", JSON.stringify(dataInfo))
    }
    const getSavedValue = () => {
        const savedValue = JSON.parse(localStorage.getItem("RazorLocalStorage"))
        if (savedValue) return savedValue
    }
    
    const LocalStorageValue = {
        getSavedValue,
        storeThis,
    }
    return (
        <LocalStorageManger.Provider value={LocalStorageValue}>
            {children}
        </LocalStorageManger.Provider>
    )
}

export {useLocalStorage, RazorLocalStorage}