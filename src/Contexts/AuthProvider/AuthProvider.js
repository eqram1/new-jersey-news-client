import React, { createContext, useEffect, useState } from 'react';
// import { getAuth } from "firebase/auth";>5
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext();

// const auth = getAuth();>5
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [state, setState] = useState(initialState);>hooks api reference top
    const [user, setUser] = useState(null);

    const googleProviderLogin = (googleProvider) => {
        // signInWithPopup(auth, provider)>google-5 no
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
        // createUserWithEmailAndPassword(auth, email, password)>password authentication no-2
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        // signInWithEmailAndPassword(auth, email, password)(auth, email, password)>password authentication no-2 below>no-1
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        // signOut(auth)>google-last
        return signOut(auth)
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

    const authInfo = { user, googleProviderLogin, logOut, createUser, signIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;