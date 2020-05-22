import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVf2lpjJGhgJ8PG2Px92nglPK0q6AZqPg",
    authDomain: "vibe-clothing.firebaseapp.com",
    databaseURL: "https://vibe-clothing.firebaseio.com",
    projectId: "vibe-clothing",
    storageBucket: "vibe-clothing.appspot.com",
    messagingSenderId: "390668334863",
    appId: "1:390668334863:web:525de0608793d4c56c707a",
    measurementId: "G-8RXDQ2X2L7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;