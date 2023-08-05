import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr1Xl7pRHwZswNPYPb6DGxTw7Zn5fs0jg",
    authDomain: "chatapp-253ff.firebaseapp.com",
    projectId: "chatapp-253ff",
    storageBucket: "chatapp-253ff.appspot.com",
    messagingSenderId: "372282815303",
    appId: "1:372282815303:web:cf32d4ff167c88c98c5262"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);