import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7RbpxvcK6oA6olMglUEOzSaOcxeG3Ngg",
  authDomain: "dropbox-app-rokas.firebaseapp.com",
  projectId: "dropbox-app-rokas",
  storageBucket: "dropbox-app-rokas.appspot.com",
  messagingSenderId: "403440706823",
  appId: "1:403440706823:web:461d2b25800c62d6b051a2",
  measurementId: "G-D1CKH88ZEZ"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

const storage = getStorage(app);

export {
  db,
  auth,
  functions,
  storage
}
