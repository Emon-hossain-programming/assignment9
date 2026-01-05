import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
 
const googleProvider=new GoogleAuthProvider()
const Authprovaider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user);
    
      //register
    const handleRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //upadte profile
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    //for logout
    const logout=()=>{
        return signOut(auth)
    }
    //signInWithGoogleProvider
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //observer
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            
            if(currentUser){
                 setUser(currentUser)
            }

            
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
     handleRegister,
     user,
     setUser,
     updateUser,
     login,
     logout,
     googleSignIn,
     auth
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
        
    
};

export default Authprovaider;