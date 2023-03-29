import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import InnerPageInformationBanner from "../innerPagesInformationBanner/InnerPageInformationBanner";
import DownloadBanner from "../downloadBanner/DownloadBanner";
import BlogPostsList from "../blogPostsList/BlogPostsList";

import useLatestPosts from "../../hooks/useLatestPosts";

export default function SearchResult({ posts, comments }) {
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
    }, [location.search, posts, searchQuery]);

    return (
        <>
            <InnerPageInformationBanner
                blogName={searchQuery}
                subtitle={"Search Results For:"}
            />

            <DownloadBanner />

            <div className="search-result">
                <BlogPostsList
                    posts={searchResults}
                    latest3Posts={latest3Posts}
                    comments={comments}
                />
            </div>
        </>
    );
}
