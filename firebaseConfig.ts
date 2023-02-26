// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8dhnXla7gv_svAiUpwRHor93KmLkcwX8",
  authDomain: "hackathon-project-f8b27.firebaseapp.com",
  projectId: "hackathon-project-f8b27",
  storageBucket: "hackathon-project-f8b27.appspot.com",
  messagingSenderId: "201043430158",
  appId: "1:201043430158:web:cb5bcd62594968eeee655f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
let auth = getAuth(app);

const db = getFirestore(app);
export { app, db, auth };

export const firebaseApp = initializeApp(firebaseConfig);
