import firebase from 'firebase';
import  'firebase/firestore';
{/*import { initializeApp} from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';*/}



const firebaseConfig = {
  apiKey: "AIzaSyB_kWmJDX8EuU0iM3X63aN2rvGf5APFu_g",
  authDomain: "clone-614a9.firebaseapp.com",
  projectId: "clone-614a9",
  storageBucket: "clone-614a9.appspot.com",
  messagingSenderId: "921204635860",
  appId: "1:921204635860:web:abbea2aa63aaee2deca341"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const auth = firebase.auth();

export {db , auth };
  

 // const firebaseApp = initializeApp(firebaseConfig);

  //const db =getFirestore();

 // const auth = getAuth();

 // export {db, auth};
