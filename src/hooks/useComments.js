import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/Firebase.utils";
import { deleteComment } from "../utils/Firebase.utils";

export default function useComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const commentsCollection = collection(db, "comments");
            const querySnapshot = await getDocs(commentsCollection);
            const tempDoc = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setComments(tempDoc);
        };
        getComments();
    }, []);

    const OnAddComment = (newComment) => {
        setComments((comments) => [
            ...comments,
            { ...newComment, id: newComment.id },
        ]);
    };

    const OnDeleteComment = async (commentId, currentUser) => {
        const updatedComments = comments.filter((c) => c.id !== commentId);

        setComments(updatedComments);
    };

    useEffect(() => {
        const sortedComments = comments.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        setComments(sortedComments);
    }, [comments]);

    return {
        comments,
        OnAddComment,
        OnDeleteComment,
    };
}
