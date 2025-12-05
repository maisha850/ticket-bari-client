// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOfHdpKKGBo_aga750in5OO8rYeXE4qvk",
  authDomain: "ticket-bari-d4472.firebaseapp.com",
  projectId: "ticket-bari-d4472",
  storageBucket: "ticket-bari-d4472.firebasestorage.app",
  messagingSenderId: "664257051138",
  appId: "1:664257051138:web:f7401880ebccb5d172c51b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)