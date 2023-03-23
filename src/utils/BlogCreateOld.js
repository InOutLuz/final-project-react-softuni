import { db } from "./Firebase.utils";
import { addDoc, collection } from "firebase/firestore";

const BlogCreate = async () => {
    try {
        const createdAt = new Date(); // get current date and time
        const docRef = await addDoc(collection(db, "blog-posts"), {
            title: "How to code in React",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category: {
                Uncategorised: false,
                IT: true,
                Business: false,
                News: true,
            },
            tags: {
                lifestile: false,
                Creative: true,
                HTML5: true,
                Inspiration: false,
                Motivation: false,
                PSD: false,
                Respopnsive: true,
            },
            author: "Leprikon",
            createdAt,
            imgUrl: "assets/images/blog-post-03.jpg",
        });

        console.log("Document written with ID: ", docRef.id);
        return docRef; // return the docRef object
    } catch (e) {
        console.error("Error adding document BLOGCREATE: ", e);
        throw e; // re-throw the error to be handled by the caller
    }
};

export default BlogCreate;
