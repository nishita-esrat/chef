import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
// create auth provider context
export const authContext = createContext();
// get app from firebase.init file
const auth = getAuth(app);
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
  // auth provider context value ,which is object
  const authDetails = { user, loading, createUser, nameAndPhoto };
  return (
    <authContext.Provider value={authDetails}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
