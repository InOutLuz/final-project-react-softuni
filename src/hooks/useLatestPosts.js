import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/Firebase.utils";

export default function useLatestPosts() {
    const [posts, setPosts] = useState([]);
    const [latest3Posts, setLatest3Posts] = useState([]);
    const [latest6Posts, setLatest6Posts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const postCollection = collection(db, "blog-posts");
            const querySnapshot = await getDocs(postCollection);
            const tempDoc = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(tempDoc);
            setLoading(false);
        };
        getPosts();
    }, []);

    const OnAddPost = (newPost) => {
        setPosts((posts) => [...posts, newPost]);
    };

    useEffect(() => {
        const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt);

        setLatest3Posts(sortedPosts.slice(0, 3));
        setLatest6Posts(sortedPosts.slice(0, 6));
    }, [posts]);

    return {
        latest3Posts,
        latest6Posts,
        posts,
        loading,
        OnAddPost,
    };
}
