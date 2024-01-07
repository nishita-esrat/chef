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
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in user with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // sign in user with github
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // log out function
  const logOut = () => {
    setLoading(false)
    return signOut(auth);
  };

  // observer user is exits or not
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
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
  };
  return (
    <authContext.Provider value={authDetails}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
