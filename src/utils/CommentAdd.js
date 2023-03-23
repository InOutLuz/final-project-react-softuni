import db from "../utils/Firebase.utils";
import { addDoc, collection } from "firebase/firestore";

const addComment = async (postId, author, content) => {
    try {
        const createdAt = new Date();
        const docRef = await addDoc(collection(db, "comments"), {
            postId,
            author,
            content,
            createdAt,
        });
        console.log("Comment added with ID: ", docRef.id);
        return docRef;
    } catch (e) {
        console.error("Error adding comment: ", e);
        throw e;
    }
};

export default addComment;
