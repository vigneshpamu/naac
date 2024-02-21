// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'fantasi-9df8e.firebaseapp.com',
  projectId: 'fantasi-9df8e',
  storageBucket: 'fantasi-9df8e.appspot.com',
  messagingSenderId: '1095861234205',
  appId: '1:1095861234205:web:20b04281ab80d8619c74f4',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
