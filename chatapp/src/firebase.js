import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOXkIxmj7nAeAdo6U4XZWqVkPkt4pp0EA",
  authDomain: "chat-f6cba.firebaseapp.com",
  projectId: "chat-f6cba",
  storageBucket: "chat-f6cba.appspot.com",
  messagingSenderId: "329569637575",
  appId: "1:329569637575:web:2486ef94d7189c237fdae2",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
