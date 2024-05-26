import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../FireBase";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { ACTION } from "../helpers/const";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const googleProvider = new GoogleAuthProvider();

  async function register(name, surname, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: `${name
          .split(" ")
          .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
          .join(" ")} ${surname
          .split(" ")
          .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
          .join(" ")}`,
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const navigate = useNavigate();
  async function signInGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    return onAuthStateChanged(auth, (user) =>
      dispatch({
        type: ACTION.GET_USER,
        payload: user,
      })
    );
  }

  async function logOutUser() {
    return signOut(auth)
      .then(() => {
        <Alert severity="success">Sign-out successful.</Alert>;
      })
      .catch((error) => {
        <Alert severity="errer">An error happened.</Alert>;
      });
  }

  const values = {
    register,
    signInGoogle,
    user: state.user,
    logOutUser,
    login,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
