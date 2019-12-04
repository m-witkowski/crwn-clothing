import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvcwXm-3dAbuJmA_MgvkGbaZSAEJHN1XQ",
    authDomain: "crwn-db-2445d.firebaseapp.com",
    databaseURL: "https://crwn-db-2445d.firebaseio.com",
    projectId: "crwn-db-2445d",
    storageBucket: "crwn-db-2445d.appspot.com",
    messagingSenderId: "573066394124",
    appId: "1:573066394124:web:ad77cff82570f2e4204c29",
    measurementId: "G-KNYFP70FX7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;