import db from "./Firebase.utils";
import { updateDoc, doc } from "firebase/firestore";

const addComment = async (postId, comment) => {
    try {
        const postRef = doc(db, "blog-posts", postId);
        await updateDoc(postRef, {
            comments: [...comments, comment],
        });
    } catch (error) {
        console.error("Error adding comment: ", error);
        throw error;
    }
};

export default addComment;
