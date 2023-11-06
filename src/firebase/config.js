import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '!!!!',
  authDomain: 'hi-chat-5718f.firebaseapp.com',
  projectId: 'hi-chat-5718f',
  storageBucket: 'hi-chat-5718f.appspot.com',
  messagingSenderId: '927945895356',
  appId: '1:927945895356:web:d9f8ef663ba9cc5df14fb9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif
export const auth = getAuth(app);

// google yetkilendirmesi için kurulum
export const provider = new GoogleAuthProvider();

// veritabının referansını oluşturma
export const db = getFirestore(app);