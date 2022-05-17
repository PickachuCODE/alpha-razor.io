import { createContext, useContext, useEffect, useState } from "react";
import { signWithGithHub, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider } from 'firebase/auth'
import { RazorAuth } from "./firebaseConfig";
import { useLocalStorage } from "../RazorFunctions/LocalStorage";


const AuthContext = createContext({})

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
    // Auth states
    const [user, setUser] = useState(false)
    const [newAccount, setNewAccount] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [authError, setAuthError] = useState("")
    const [localUser, setLocalUser] = useState(false)
    const { storeThis, getSavedValue } = useLocalStorage();


    useEffect(() => {
        setAuthLoading(true)
        const unsubscribe = onAuthStateChanged(RazorAuth, (result) => {
            if (result) {
                setUser(result)
                if (getSavedValue().user !== null) {
                    setLocalUser(true)
                }
                console.log(user);
            }
                else {
                setUser(null)
            }
            setAuthError("")
            setAuthLoading(false)
        })
        return (unsubscribe)
    }, [])


    const registerUserWithId = () => {
        //
        console.log('Not set yet');
    }
    function InitUser(iUser) {
        let dataUpdate = getSavedValue();
        
        if (dataUpdate.user === null) {
            dataUpdate.user = iUser;
            console.log(dataUpdate.user);
            setLocalUser(true)
            storeThis(dataUpdate);
        }
    }    const signWithGitHub = () => {
        //
        setAuthLoading(true)
        const provider = new GithubAuthProvider();
        signInWithPopup(RazorAuth, provider)
            .then((userResult) => {
                InitUser(userResult)
                console.log(userResult);
            })
            .catch((error) => {
                setAuthError(error)
            })
            .finally(
                () => { setAuthLoading(false) }
            )
    }
    
    const signUpUser = () => {
        setNewAccount(true)
    }

    const logOutUser = () => {
        console.log("user out");
        signOut(RazorAuth)
        
    }

    const forgotId = (email) => {
        //
        console.log('Not set yet');
    }
    const authValue = {
        registerUserWithId,
        signWithGitHub,
        logOutUser,
        forgotId,
        user,
        authError,
        newAccount,
        authLoading,
        signUpUser,
        localUser
        
    }
    return (<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>)
}

export { AuthContextProvider, useAuthContext }