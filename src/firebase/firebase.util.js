import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB3wdsPirkgotx3DukuyJFMyMXrGpUqqxc",
    authDomain: "crwn-db-92933.firebaseapp.com",
    databaseURL: "https://crwn-db-92933.firebaseio.com",
    projectId: "crwn-db-92933",
    storageBucket: "crwn-db-92933.appspot.com",
    messagingSenderId: "774517376696",
    appId: "1:774517376696:web:97fd851a519dd4bae3d64d",
    measurementId: "G-71ZW5H6P8W"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;