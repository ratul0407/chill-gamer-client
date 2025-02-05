import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  // user and loading states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //providers
  const googleProvider = new GoogleAuthProvider();
  //creat user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update user info
  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  //sign in with google

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //observe the current user
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscibe();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    signOutUser,
    loading,
    signInUser,
    googleSignIn,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
