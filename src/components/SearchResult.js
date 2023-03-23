import React, { useState, useEffect } from "react";
import BlogSinglePost from "./BlogSinglePost";
import { useLocation } from "react-router-dom";
import BlogDetailsBanner from "./BlogDetailsBanner";
import DownloadBanner from "./DownloadBanner";
import BlogPostsAll from "./BlogPostsAll";
import useLatestPosts from "./hooks/useLatestPosts";

function SearchResult({ posts }) {
    const [searchResults, setSearchResults] = useState([]);
    const { latest3Posts } = useLatestPosts(posts);

    const location = useLocation();
    const searchQuery = decodeURIComponent(
        location.search.substring(3).replace(/\+/g, " ")
    );

    useEffect(() => {
        // extract only the part after ?q=
        const results = posts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    }, [location.search, posts]);

    return (
        <>
            <BlogDetailsBanner
                blogName={searchQuery}
                subtitle={"Search Results For:"}
            />

            <DownloadBanner />

            <div className="search-result">
                <BlogPostsAll
                    posts={searchResults}
                    latest3Posts={latest3Posts}
                />
            </div>
        </>
    );
}

export default SearchResult;
