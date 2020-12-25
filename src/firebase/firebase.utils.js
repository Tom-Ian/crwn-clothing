import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7LSUBbw82eg2ETu2W6pjeQsXLBS4K340",
    authDomain: "crwn-db-3595b.firebaseapp.com",
    projectId: "crwn-db-3595b",
    storageBucket: "crwn-db-3595b.appspot.com",
    messagingSenderId: "996995323543",
    appId: "1:996995323543:web:71f4097b6fa0cab3cbfbd2",
    measurementId: "G-ZTBQWGWPW2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;