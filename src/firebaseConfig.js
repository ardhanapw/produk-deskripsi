import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAymh-37Cz460CCGqHt-p9RqmI_C_B2ACE",
  authDomain: "produkdeskripsi-cc3c3.firebaseapp.com",
  projectId: "produkdeskripsi-cc3c3",
  storageBucket: "produkdeskripsi-cc3c3.appspot.com",
  messagingSenderId: "125267381381",
  appId: "1:125267381381:web:36cb015dc1442e3994edec",
  measurementId: "G-WCESJ9WJ2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)