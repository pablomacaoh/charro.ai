
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVKUcRMQC5GLU9Xv4a4kCq2OqRXrVveDo",
  authDomain: "charro-32d4c.firebaseapp.com",
  projectId: "charro-32d4c",
  storageBucket: "charro-32d4c.appspot.com",
  messagingSenderId: "252484987378",
  appId: "1:252484987378:web:7159172c5cb4704079a36b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with logging
const db = getFirestore(app);
console.log("Firebase initialized with project ID:", firebaseConfig.projectId);

export { db };
export default app;
