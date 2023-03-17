import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithPopup, signInWithEmailAndPassword,
    GoogleAuthProvider, createUserWithEmailAndPassword, signOut,
    onAuthStateChanged, signInWithRedirect
} from "firebase/auth";
import {
    doc, getDoc, setDoc, getFirestore,
    collection, writeBatch, query, getDocs
} from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyBulKp-7IVNvbb77d21vHREoastFxqIBPA",
    authDomain: "easyrent-abb3d.firebaseapp.com",
    projectId: "easyrent-abb3d",
    storageBucket: "easyrent-abb3d.appspot.com",
    messagingSenderId: "682023472703",
    appId: "1:682023472703:web:765e3c67d132633a86b28a"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGoogleppop = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

const db = getFirestore();

export const addCollectioAndDocuments = async (collectionKey, objectsToadd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
  
    objectsToadd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
    await batch.commit();
      console.log("done")
  };
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'HouseCategories');
    const q = query(collectionRef);
  
    const querySnapshop = await getDocs(q);
    const categoryMap = querySnapshop.docs.reduce((acc, docSnapShop) => {
      const {title, items} = docSnapShop.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  
    return categoryMap;
  }


export const createUserDocRef = async (userAuth) => {
    const userDocRef = doc(db, "user", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, eamil } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, eamil, createdAt
            })
        } catch (error) {

        }
    }
}

export const signInwithEandP = async (eamil, password) => {
    if (!eamil || !password) return;

    return await signInWithEmailAndPassword(auth, eamil, password)
}

export const createUserWithEandP = async (eamil, password) => {
    if (!eamil || !password) return;

    return await createUserWithEmailAndPassword(auth, eamil, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
