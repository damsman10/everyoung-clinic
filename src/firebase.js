// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5BgTb1f7hprpuvJK9il-m5YYHNgpAqG0",
  authDomain: "everyoung-clinic.firebaseapp.com",
  projectId: "everyoung-clinic",
  storageBucket: "everyoung-clinic.firebasestorage.app",
  messagingSenderId: "532028401743",
  appId: "1:532028401743:web:4d7d77aaace9bab626223a",
  measurementId: "G-JSSN98CV6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export authentication instance
export const auth = getAuth(app);
export default app;
