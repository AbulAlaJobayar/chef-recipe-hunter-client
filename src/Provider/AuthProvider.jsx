import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext(app)
const AuthProvider = ({children}) => {
const user=null;

    const authInfo ={
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;