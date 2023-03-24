import { db } from "./Firebase.utils";
import { addDoc, collection } from "firebase/firestore";

const AddComment = async ({ postId }, ownerDisplayName, content, owner) => {
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
        return docRef;
    } catch (e) {
        console.error("Error adding comment: ", e);
        throw e;
    }
};

export default AddComment;
