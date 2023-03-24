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
import CommentAdd from "./components/commentAdd/CommentAdd";
import useComments from "./components/hooks/useComments";

function App() {
    const { userDisplayName } = useContext(UserContext);

    const [loginPopupOpen, setLoginPopupOpen] = useState(false);

    const { posts, loading, OnAddPost } = useLatestPosts();
    const { comments, OnAddComment } = useComments();

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
                            element={
                                <BlogDetails
                                    posts={posts}
                                    comments={comments}
                                />
                            }
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
