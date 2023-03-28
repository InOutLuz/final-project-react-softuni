import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    addDoc,
    collection,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjeZVgd5jJDWhVUTZvDmr97cQk-OpmQnY",
    authDomain: "blog-project-e7beb.firebaseapp.com",
    projectId: "blog-project-e7beb",
    storageBucket: "blog-project-e7beb.appspot.com",
    messagingSenderId: "770070601266",
    appId: "1:770070601266:web:99d1b8de37bfbe523d662b",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const addComment = async (postId, ownerDisplayName, content, owner) => {
    try {
        const createdAt = new Date();
        const docRef = await addDoc(collection(db, "comments"), {
            postId,
            ownerDisplayName,
            owner,
            content,
            createdAt,
        });
        console.log("Comment added with ID: ", docRef.id);

        const docSnap = await getDoc(doc(db, "comments", docRef.id));

        const createdAtFromFirestore = docSnap.data().createdAt;

        const newComment = {
            id: docRef.id,
            postId,
            ownerDisplayName,
            content,
            owner,
            createdAt: createdAtFromFirestore,
        };
        console.log(createdAtFromFirestore);

        return newComment;
    } catch (e) {
        console.error("Error adding comment: ", e);
        throw e;
    }
};
