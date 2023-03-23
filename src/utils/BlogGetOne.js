import { useState, useEffect } from "react";
import db from "../utils/Firebase.utils";
import { doc, getDoc } from "firebase/firestore";

const BlogGetOne = ({ postId }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const postRef = doc(db, "blog-posts", postId);
            const docSnapshot = await getDoc(postRef);
            if (docSnapshot.exists()) {
                setPost({ id: docSnapshot.id, ...docSnapshot.data() });
            } else {
                console.log("No such document!");
            }
        };
        getPost();
    }, [postId]);

    console.log(post);
};

export default BlogGetOne;
