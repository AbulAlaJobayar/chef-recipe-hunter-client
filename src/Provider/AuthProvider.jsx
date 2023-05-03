import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut } from "firebase/auth";

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider()
export const AuthContext=createContext(app)
const AuthProvider = ({children}) => {
const [user,setUser]=useState('')
const [loading,setLoading]=useState(true);
const createUser=(email, password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password);
}

const singIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const singInWithGoogle=()=>{
    return signInWithPopup(auth, googleprovider)
}
const singInWithGithub=()=>{
    return signInWithPopup(auth, githubprovider)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}




useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
         setUser(loggedUser);
         setLoading(false)
     })
     return()=>{
         unsubscribe();
     }
 },[])

    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
        singInWithGoogle,
        singInWithGithub,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;