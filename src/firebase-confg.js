import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyAxa9WALmzOOHPWrYrcxJJ2wnCFvyzqI4E",
    authDomain: "re-fb-3ab4e.firebaseapp.com",
    projectId: "re-fb-3ab4e",
    storageBucket: "re-fb-3ab4e.appspot.com",
    messagingSenderId: "964041303676",
    appId: "1:964041303676:web:e6c1a9480c192315b88bf9",
    measurementId: "G-3KNFVF8QVG"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);