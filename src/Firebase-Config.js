import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDcB3nl89rL9QqOXKPOZAfRzsMdmtQeWHQ",
  authDomain: "fir-chatapp-5efe7.firebaseapp.com",
  projectId: "fir-chatapp-5efe7",
  storageBucket: "fir-chatapp-5efe7.appspot.com",
  messagingSenderId: "816686985627",
  appId: "1:816686985627:web:656e085a5abed74a91713e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();