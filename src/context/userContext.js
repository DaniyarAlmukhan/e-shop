import { createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async user => {
            if (user) { await createUserDocumentFromAuth(user); }
            setCurrentUser(user)
        });
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}