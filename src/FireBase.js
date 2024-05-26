import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfVLOzjT5DpWm_s79Zi-CrprAIQ41dhFo",
  authDomain: "first-project-d9fbf.firebaseapp.com",
  databaseURL: "https://first-project-d9fbf-default-rtdb.firebaseio.com",
  projectId: "first-project-d9fbf",
  storageBucket: "first-project-d9fbf.appspot.com",
  messagingSenderId: "737465373189",
  appId: "1:737465373189:web:235367f8b5b94dc974026c",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD1larnCv6bVxvxyQXZ-z8-1NK9moeUJew",
//   authDomain: "test-project-c8e5c.firebaseapp.com",
//   projectId: "test-project-c8e5c",
//   storageBucket: "test-project-c8e5c.appspot.com",
//   messagingSenderId: "528335984944",
//   appId: "1:528335984944:web:f30a3c0da0cdf8879810f5",
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
