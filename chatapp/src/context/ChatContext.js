import { onAuthStateChanged } from "firebase/auth";
import { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";
// import { defaultMethod } from "react-router-dom/dist/dom";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload
              ? currentUser.uid + action.payload
              : action.payload + currentUser.uid,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
