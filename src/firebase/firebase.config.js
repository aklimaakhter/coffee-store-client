// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5kDKakaG5fZghIwLTLf_mfltHC1Y_FhA",
  authDomain: "coffee-store-43b9e.firebaseapp.com",
  projectId: "coffee-store-43b9e",
  storageBucket: "coffee-store-43b9e.appspot.com",
  messagingSenderId: "335182463592",
  appId: "1:335182463592:web:bb61986f88602908bcf1dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;