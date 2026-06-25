import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK4m0GZa7mgUkiT-5LzOMw4Zzp4chc37k",
  authDomain: "person-f77f1.firebaseapp.com",
  databaseURL: "https://person-f77f1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "person-f77f1",
  storageBucket: "person-f77f1.firebasestorage.app",
  messagingSenderId: "1038250993554",
  appId: "1:1038250993554:web:5fc29f9730fa506b60034b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
