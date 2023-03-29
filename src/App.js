import "./App.css";

import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import BlogPostDetails from "./components/blogPostDetails/BlogPostDetails";
import BlogByDateList from "./components/blogByDateList/BlogByDateList";
import BlogPostsHome from "./components/blogPostsHome/BlogPostsHome";
import CreateBlogForm from "./components/blogCreateForm/BlogCreateForm";
import SearchResult from "./components/searchResult/SearchResult";
import NotFound from "./components/notFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginRegisterPopup from "./components/loginRegisterPopup/LoginRegisterPopup";

import { UserContext } from "./contexts/userContext";

import useLatestPosts from "./hooks/useLatestPosts";
import useComments from "./hooks/useComments";

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
                        <LoginRegisterPopup
                            handlePopupClose={handlePopupClose}
                        />
                    )}
                    <Routes>
                        <Route
                            index
                            element={
                                <BlogPostsHome
                                    posts={posts}
                                    comments={comments}
                                />
                            }
                        />

                        <Route
                            path="/blog/:postId"
                            element={
                                <BlogPostDetails
                                    posts={posts}
                                    comments={comments}
                                    handlePopupOpen={handlePopupOpen}
                                    OnAddComment={OnAddComment}
                                />
                            }
                        />

                        <Route
                            path="/posts/:datePosted"
                            element={
                                <BlogByDateList
                                    posts={posts}
                                    comments={comments}
                                />
                            }
                        />
                        <Route
                            path="/search-results/*"
                            element={
                                <SearchResult
                                    posts={posts}
                                    comments={comments}
                                />
                            }
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
