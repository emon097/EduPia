import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const Authcontext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [Loading, setLoading] = useState(true);

  // createaccoun
  const createaccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // createaccoun

  //  signinwithemail
  const signinemail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  signinwithemail

  //   logout
  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   logout
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const updateall = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authinfo = {
    user,
    Loading,
    createaccount,
    signinemail,
    Logout,
    updateall,
  };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Context;
