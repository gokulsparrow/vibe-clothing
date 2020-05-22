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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapeShot = await userRef.get();
    
    console.log(snapeShot);

    if (!snapeShot.exists) {
        const { displayName ,email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })}
        catch (error) {
            console.log('error creating user', error.message);
        }    
        

    }
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;