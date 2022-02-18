import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase.prod";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  SignIn: () => Promise,
  SignOut: () => Promise,
  signInWithGoogle: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("The user is", currentUser);
  }, [currentUser]);

  function register(emailAddress, password) {
    return createUserWithEmailAndPassword(auth, emailAddress, password);
  }

  function SignIn(emailAddress, password) {
    return signInWithEmailAndPassword(auth, emailAddress, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function SignOut() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    register,
    SignIn,
    SignOut,
    signInWithGoogle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
