import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";
export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUp = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const authDetails = { user, loading ,signUp};
  return (
    <authContext.Provider value={authDetails}>{children}</authContext.Provider>
  );
};

export default AuthProvider;