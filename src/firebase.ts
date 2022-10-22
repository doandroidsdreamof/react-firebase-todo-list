  /* eslint-disable  */
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  
  const firebaseConfig = {
  apiKey: "AIzaSyAb96gU-AJGG-UmEwcBNTU1KS5hUuI3eek",
  authDomain: "todo-list-7d913.firebaseapp.com",
  projectId: "todo-list-7d913",
  storageBucket: "todo-list-7d913.appspot.com",
  messagingSenderId: "134956116629",
  appId: "1:134956116629:web:3cb467357b7d3c2285499c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

