import { useState, useEffect } from "react";
import db from "../utils/Firebase.utils";
import { collection, getDocs } from "firebase/firestore";

const BlogGetAll = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postCollection = collection(db, "blog-posts");
            const querySnapshot = await getDocs(postCollection);
            const tempDoc = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(tempDoc);
        };
        getPosts();
    }, []);

    console.log(posts);
};

export default BlogGetAll;
