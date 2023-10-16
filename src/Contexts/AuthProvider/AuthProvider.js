import React, { createContext, useEffect, useState } from 'react';
// import { getAuth } from "firebase/auth";>5
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext();

// const auth = getAuth();>5
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [state, setState] = useState(initialState);>hooks api reference top
    const [user, setUser] = useState(null);

    const googleProviderLogin = (googleProvider) => {
        // signInWithPopup(auth, provider)>5
        return signInWithPopup(auth, googleProvider)
    }
    // useEffect collect from stack overflow (how can i declare useeffect in react)
    // useEffect(() => {

    //   }, []);

    // onAuthStateChanged(auth, (user) => {})>collect from firebase manage users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser)
            setUser(currentUser)
        })
        return () => { unsubscribe() }
    }, []);

    const authInfo = { user, googleProviderLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;