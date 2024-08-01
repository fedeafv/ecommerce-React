import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzOWeTMo_gPbdzHEB-DnnZZ3s_RxawyTs",
  authDomain: "umpire-shopping.firebaseapp.com",
  projectId: "umpire-shopping",
  storageBucket: "umpire-shopping.appspot.com",
  messagingSenderId: "185376081944",
  appId: "1:185376081944:web:eb87bf6bc93953067b5b6d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
