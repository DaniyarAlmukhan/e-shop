import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInwithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANoBo-TQNVDnKfOv7pJhfwHnuHG7E4t-c",
    authDomain: "e-shop-a3c29.firebaseapp.com",
    projectId: "e-shop-a3c29",
    storageBucket: "e-shop-a3c29.appspot.com",
    messagingSenderId: "922545059856",
    appId: "1:922545059856:web:bd2bb9f88bb56d936a7295"
};

const firabaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        }
        catch (err) {
            console.log(err.message, "err.message");
        }
    }

    return userDocRef;
}