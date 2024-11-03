import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAzgeuGO0vQkSjJiXA-CcK6B9FYhrTMdY",
    authDomain: "portfolio-355d1.firebaseapp.com",
    projectId: "portfolio-355d1",
    storageBucket: "portfolio-355d1.appspot.com",
    messagingSenderId: "554741345011",
    appId: "1:554741345011:web:96cec46e06da3977536586"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  // authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
console.log('current user before', auth.currentUser);
export const GoogleSign =async ()=> await signInWithPopup(auth, provider); 

// database

export const db = getFirestore();
export const dbSetup = async (userAuth, additionaldata={}) =>{
    const dbRef = await doc(db, 'users', userAuth.uid);
    console.log(dbRef);

    const dbSnap =  await getDoc(dbRef);
    console.log(dbSnap.exists());

    if(!dbSnap.exists()){
        const {displayName, email}  = userAuth;
        const date = new Date();

        try{
            await setDoc(dbRef, {displayName, email, date, ...additionaldata});
            console.log('db created')
        }catch(error){
            console.log(error.message);
        }
    }
}


// sign up with email and password

export const signInWithEmail = (email, password) => {
    if(!email || !password) return;

  return  createUserWithEmailAndPassword(auth, email, password);
} 


// login with email and password
export const loginWithEmail = (email, password)=>{
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
}

// sign out
export const signOutUser = async ()=> await signOut(auth);

// onAuthState

export const authState= (callback)=> onAuthStateChanged(auth, callback);

// write/ upload data to firebase

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const collectionDocRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(collectionDocRef, object);
    });
    await batch.commit();
    console.log('batch done')
}

// get data from firebase database

export const getCollectionAndDocuments =async()=>{
        const getCollectionRef =  collection(db, 'categories');
        const q = query(getCollectionRef);
        const querySnapShot = await getDocs(q);
        const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
            const {title, items} = docSnapShot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        },{})
        return categoryMap;
}