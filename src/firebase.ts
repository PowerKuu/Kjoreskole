import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCs5nH5REjEAYXS43ccP3kgjZKSwjEjmns",
  authDomain: "kjoreskolen-5bff9.firebaseapp.com",
  projectId: "kjoreskolen-5bff9",
  storageBucket: "kjoreskolen-5bff9.appspot.com",
  messagingSenderId: "929305487839",
  appId: "1:929305487839:web:e218f2ab02b5b0a246fc6a",
  measurementId: "G-6GV7Z52K87"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)