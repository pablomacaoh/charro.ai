
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
// Replace these values with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDVKUcRMQC5GLU9Xv4a4kCq2OqRXrVveDo",
  authDomain: "charro-32d4c.firebaseapp.com",
  projectId: "charro-32d4c",
  storageBucket: "charro-32d4c.firebasestorage.app",
  messagingSenderId: "252484987378",
  appId: "1:252484987378:web:7159172c5cb4704079a36b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
