
//import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
        apiKey: "AIzaSyCdI3KNZQ-tVI_yPZW8f1P2npDENF6jmfw",
        authDomain: "crwn-db-3d2f6.firebaseapp.com",
        projectId: "crwn-db-3d2f6",
        storageBucket: "crwn-db-3d2f6.appspot.com",
        messagingSenderId: "541287241978",
        appId: "1:541287241978:web:00ea08f1cae18d28565143"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const{ displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
  } catch (error) {
    console.log('error creating user', error.message);
  }
}
return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

