import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase.prod";
import { useNavigate } from "react-router-dom";

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
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth", user);
      setCurrentUser(user);
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
    const navigate = useNavigate();
    return signOut(auth)
      .then(() => {
        console.log("logged out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
