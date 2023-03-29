import { useState, useEffect } from "react";

export default function usePostComments(comments, postId) {
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        const filteredComments = comments.filter(
            (comment) => comment.postId === postId
        );
        const sortedComments = filteredComments.sort(
            (a, b) => b.createdAt.toDate() - a.createdAt.toDate()
        );
        setPostComments(sortedComments);
    }, [comments, postId]);

    return postComments;
}
