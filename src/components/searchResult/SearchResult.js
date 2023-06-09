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
        if (searchQuery) {
            const results = posts.filter((post) => {
                const titleMatch = post.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
                const categoryMatch = Object.keys(post.category).some(
                    (key) =>
                        post.category[key] &&
                        key.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return titleMatch || categoryMatch;
            });
            setSearchResults(results);
            console.log("results:", results);
        }
    }, [location.search, posts, searchQuery]);

    console.log("searchQuery:", searchQuery);

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
