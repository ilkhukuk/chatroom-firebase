// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqHb8hn5ouyynX_9NzCJQj4mUMgbPKdCc",
  authDomain: "mychatroom-4dda2.firebaseapp.com",
  projectId: "mychatroom-4dda2",
  storageBucket: "mychatroom-4dda2.appspot.com",
  messagingSenderId: "714391530928",
  appId: "1:714391530928:web:6186ea68239918cca27a75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif
export const auth = getAuth(app);

// google yetkilendirmesi için kurulum
export const provider = new GoogleAuthProvider();

// veritabının referansını oluşturma
export const db = getFirestore(app);
