import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvQ0sDc9fLSt_jvEfCWJrpyscT_VEaF-g",
    authDomain: "crown-db-51e55.firebaseapp.com",
    projectId: "crown-db-51e55",
    storageBucket: "crown-db-51e55.appspot.com",
    messagingSenderId: "1071393185710",
    appId: "1:1071393185710:web:be4922843874132a9cb23f",
    measurementId: "G-HHMCKF2Q83"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
