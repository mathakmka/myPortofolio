// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ⬅ Tambahkan ini
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqzYUXzoyPyRGtmL4h-Dt1lgbnmzf1nY",
  authDomain: "myportofolio-6d2f7.firebaseapp.com",
  projectId: "myportofolio-6d2f7",
  storageBucket: "myportofolio-6d2f7.firebasestorage.app",
  messagingSenderId: "44334924070",
  appId: "1:44334924070:web:25acea8fa33d973d9d01e7",
  measurementId: "G-HCQMR44YLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // ⬅ Tambahkan ini

// Export Firebase services you need
export { db };