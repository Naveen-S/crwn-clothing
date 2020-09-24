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

/* 
    Function responsible for taking the userAuth, from that extracting the user reference.
    And if user exist just return the user reference, if not create user in DB using userRef.set().
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }  
    // Get user from firestore
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // userRef always returns a document call .get() to get the snapshot which has .exists to tell whether user is in db or not.
    const snapshot = await userRef.get();
    // If user is not in db.
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        let obj = {
            displayName,
            email,
            createdAt,
            ...additionalData
        };
        console.log('obj ', obj);
        
        if(!obj.displayName) {
            console.log("Don't add to DB display name is empty!");
            return;
        }

        try {
            // Create a row for him.
            await userRef.set(obj)
        } catch(error) {
            console.log('error creating user ', error.message);
        }
    }
    return userRef;
}

export const addCollectionsAndDocumentsToFirestore = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // For all or nothing, no intermediate state
    const batch = firestore.batch();

    objectToAdd.forEach(item => {
        // Create an empty doc with random unique id.
        const docRef = collectionRef.doc();
        batch.set(docRef, item);
    });

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
    const transformedData = collectionsSnapshot.docs.map(doc => {
        const {title, routeName, items} = doc.data();
        return { title, routeName, items, id: doc.id};
    })

    console.log(transformedData);

    return transformedData.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {}); 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;