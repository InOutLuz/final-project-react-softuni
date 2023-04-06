import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import RecentPosts from "../blogSidebarComponents/RecentPosts";

import useLatestPosts from "../../hooks/useLatestPosts";

export default function BlogSidebar({ posts, comments }) {
    const { latest3Posts } = useLatestPosts(posts);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const encodedQuery = encodeURIComponent(searchQuery);
        navigate(`/search-results/?q=${encodedQuery}`);
    };

    return (
        <div className="col-lg-4">
            <div className="sidebar">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sidebar-item search">
                            <form
                                id="search_form"
                                onSubmit={handleSearchSubmit}
                            >
                                <input
                                    type="text"
                                    name="q"
                                    className="searchText"
                                    placeholder="type to search..."
                                    autoComplete="on"
                                    value={searchQuery}
                                    onChange={(event) =>
                                        setSearchQuery(event.target.value)
                                    }
                                />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sidebar-item recent-posts">
                            <div className="sidebar-heading">
                                <h2>Recent Posts</h2>
                                {latest3Posts.map((p) => (
                                    <RecentPosts
                                        key={p.id}
                                        {...p}
                                        comments={comments}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="sidebar-item categories">
                            <div className="sidebar-heading">
                                <h2>Categories</h2>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <Link
                                            to={"/search-results/?q=business"}
                                        >
                                            - Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search-results/?q=news"}>
                                            - News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/search-results/?q=it"}>
                                            - IT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sidebar-item tags">
                            <div className="sidebar-heading">
                                <h2>Tag Clouds</h2>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <a href="#">Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="#">Creative</a>
                                    </li>
                                    <li>
                                        <a href="#">HTML5</a>
                                    </li>
                                    <li>
                                        <a href="#">Inspiration</a>
                                    </li>
                                    <li>
                                        <a href="#">Motivation</a>
                                    </li>
                                    <li>
                                        <a href="#">PSD</a>
                                    </li>
                                    <li>
                                        <a href="#">Responsive</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
