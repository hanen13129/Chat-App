import * as firebase from "firebase/app";
 import "firebase/firestore";
 import { getFirestore } from "@firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyAw381AzNbxpGP6oPxjbZSFKY-QIY3zyT0",
  authDomain: "chatapp-8808c.firebaseapp.com",
  projectId: "chatapp-8808c",
  storageBucket: "chatapp-8808c.appspot.com",
  messagingSenderId: "1095391205641",
  appId: "1:1095391205641:web:d5a8da23d5df6ebdda9bd8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);

 export { db };