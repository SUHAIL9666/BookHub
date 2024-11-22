import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfzDZG4aE5HnxTslR6Fy19DHVMFg-Twe4",
  authDomain: "bookhub-stackblitz.firebaseapp.com",
  projectId: "bookhub-stackblitz",
  storageBucket: "bookhub-stackblitz.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();