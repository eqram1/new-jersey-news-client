import React, { createContext } from 'react';
// import { getAuth } from "firebase/auth";>5
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext();

// const auth = getAuth();>5
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'ABM Eqram Hossain' }

    const googleProviderLogin = (googleProvider) => {
        // signInWithPopup(auth, provider)>5
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user, googleProviderLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;