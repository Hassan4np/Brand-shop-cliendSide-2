import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import {  createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);
//constext ------>
export const AuthContext = createContext(null);

//mainProjcet---------->
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)

    //Usersignup----------->
    const UserSignup = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //UserLOgin----------->
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Auth state change------------>
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setuser(user)
            setloading(false)
        })
    }, [])
    //UserLogout------->
    const UserLogout = () => {
        setloading(true)
        return signOut(auth);
    }

    const Authinfo = {
        UserLogin,
        UserLogout,
        UserSignup,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;