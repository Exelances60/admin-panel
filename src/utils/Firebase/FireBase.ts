import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNcz7OOXlLBBg5Cu-tfKCIlkLA9TwBpMg",
  authDomain: "admin-panel-daeaa.firebaseapp.com",
  projectId: "admin-panel-daeaa",
  storageBucket: "admin-panel-daeaa.appspot.com",
  messagingSenderId: "292044834353",
  appId: "1:292044834353:web:c2a67bfc41ddee7cf57710",
  measurementId: "G-VK9ZFCMX2P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dataBase = getFirestore(app);

export const registerWithEmailAndPassword = async (
  email: string,
  nickname: string,
  password: string
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    const userData = {
      uid: user?.uid,
      email,
      nickname,
      password,
    };
    const docRef = await addDoc(collection(dataBase, "users"), userData);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default app;
