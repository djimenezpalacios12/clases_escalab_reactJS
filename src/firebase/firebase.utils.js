import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCdrR44rlGS_vn8eE6yrugpo_Y5UZez0w8",
  authDomain: "react-clases-01.firebaseapp.com",
  projectId: "react-clases-01",
  storageBucket: "react-clases-01.appspot.com",
  messagingSenderId: "87445010356",
  appId: "1:87445010356:web:5f5cd7f02d7e1da563e4e1",
};

// Initialize Firebase
firebase.initializeApp(config);

//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // referencias
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Obtener las referencias
  const snapShot = await userRef.get(); // snapShot: Trabajr con un doc. obtenido
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creando usuario", error);
    }
  }

  return userRef;
};

// Servicios de terceros (pproviders)
export const auth = firebase.auth();

// Funciones de firebase
export const firestore = firebase.firestore();

// Servicios que usare
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
