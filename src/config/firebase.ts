// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmiG9V4hv6lejBKOFn1a4U3jowdqfQgs",
  authDomain: "doctor-test-b1ae8.firebaseapp.com",
  projectId: "doctor-test-b1ae8",
  storageBucket: "doctor-test-b1ae8.appspot.com",
  messagingSenderId: "1020330512561",
  appId: "1:1020330512561:web:40eaaf26dd3a792ff49290",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createFirebaseUser = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);
export const sendConfirmationEmail = async (user: User) =>
  await sendEmailVerification(user);
export const signinFirebaseUser = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);
