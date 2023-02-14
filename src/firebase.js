import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONTENT_KEY,
    authDomain: "thecubanshow-d5b0d.firebaseapp.com",
    projectId: "thecubanshow-d5b0d",
    storageBucket: "thecubanshow-d5b0d.appspot.com",
    messagingSenderId: "706337216858",
    appId: "1:706337216858:web:fdfa465a85555fa1f33b63",
    measurementId: "G-BN4GNTD1RM"
  };

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();