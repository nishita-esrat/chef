import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from "react";

// create auth provider context
export const authContext = createContext();
// get app from firebase.init file
const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();
// github provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   add user name and photo
  const nameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //  sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in user with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in user with github
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // log out function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // reset password
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  // observer user is exits or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (Currentuser) => {
      if (Currentuser) {
        setUser(Currentuser);
        setLoading(false);
      } else {
        setUser(Currentuser);
        setLoading(false);
      }
    });
  }, []);

  // auth provider context value ,which is object
  const authDetails = {
    user,
    loading,
    createUser,
    nameAndPhoto,
    signInUser,
    googleSignIn,
    githubSignIn,
    logOut,
    setUser,
    resetPassword
  };
  return (
    <authContext.Provider value={authDetails}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
