import "./App.css";

import Preloader from "./components/Preloader";

import Home from "./components/Home";

import { useState, useEffect } from "react";
import { db } from "./utils/Firebase.utils";

import { Route, Routes } from "react-router-dom";

import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

import BlogByDateDisplay from "./components/BlogByDateDisplay";
import SearchResult from "./components/SearchResult";

import { useContext } from "react";
import { UserContext } from "./components/contexts/userContext";
import CreateBlogForm from "./components/blogCreateForm/BlogCreateForm";
import { doc, getDoc } from "firebase/firestore";
import Popup from "./components/popup/Popup";
import useLatestPosts from "./components/hooks/useLatestPosts";

function App() {
    const { currentUser } = useContext(UserContext);

    const [userDisplayName, setUserDisplayName] = useState([]);

    const [loginPopupOpen, setLoginPopupOpen] = useState(false);

    const { posts, loading, OnAddPost } = useLatestPosts();

    useEffect(() => {
        const getUser = async () => {
            if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                const docSnapshot = await getDoc(userRef);
                if (docSnapshot.exists()) {
                    const userData = {
                        id: docSnapshot.id,
                        ...docSnapshot.data(),
                    };
                    setUserDisplayName(userData);
                } else {
                    console.log("No such user!");
                }
            }
        };
        getUser();
    }, [currentUser]);

    const handlePopupClose = () => {
        setLoginPopupOpen(false);
    };

    const handlePopupOpen = () => {
        setLoginPopupOpen(true);
    };

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <Header handlePopupOpen={handlePopupOpen} />
                    {loginPopupOpen && (
                        <Popup handlePopupClose={handlePopupClose} />
                    )}
                    <Routes>
                        <Route index element={<Home posts={posts} />} />
                        <Route
                            path="/blog/:postId"
                            element={<BlogDetails posts={posts} />}
                        />
                        <Route
                            path="/posts/:datePosted"
                            element={<BlogByDateDisplay posts={posts} />}
                        />
                        <Route
                            path="/search-results/*"
                            element={<SearchResult posts={posts} />}
                        />
                        <Route
                            path="/new-post"
                            element={
                                <CreateBlogForm
                                    user={userDisplayName}
                                    OnAddPost={OnAddPost}
                                />
                            }
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
