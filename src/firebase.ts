import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// ... other firebase imports

const firebaseConfig = {
  apiKey: "AIzaSyBdzZyTffozwf9cZpZg0MWhUTcfPAeGo60",
  authDomain: "hanja-kongbu-2.firebaseapp.com",
  projectId: "hanja-kongbu-2",
  storageBucket: "hanja-kongbu-2.appspot.com",
  messagingSenderId: "932529151502",
  appId: "1:932529151502:web:bfd24e643e818cdaa2265f",
  measurementId: "G-ZCRL7ME0DS",
};
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const todosRef = collection(db, "todos");
