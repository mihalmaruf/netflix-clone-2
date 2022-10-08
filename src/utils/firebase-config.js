import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7IhihLuiEr1MBcykx5IjNqiVQWlkcoSg",
  authDomain: "netflix-redux-clone-72281.firebaseapp.com",
  projectId: "netflix-redux-clone-72281",
  storageBucket: "netflix-redux-clone-72281.appspot.com",
  messagingSenderId: "790784749905",
  appId: "1:790784749905:web:d310c149d8c4215568e370"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);