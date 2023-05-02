import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext=createContext(app)
const AuthProvider = ({children}) => {
const user=null;
const [loading,setLoading]=useState(true);
const createUser=(email, password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password);
}

const singIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;