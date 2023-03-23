import React, { useState } from "react";
import RecentPosts from "./sidebarComponents/RecentPosts";
import SearchResult from "./SearchResult";
import useLatestPosts from "./hooks/useLatestPosts";

export default function BlogSidebar({ posts }) {
    const { latest3Posts } = useLatestPosts(posts);

    return (
        <div className="col-lg-4">
            <div className="sidebar">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sidebar-item search">
                            <form
                                id="search_form"
                                name="gs"
                                method="GET"
                                action="/search-results/"
                            >
                                <input
                                    type="text"
                                    name="q"
                                    className="searchText"
                                    placeholder="type to search..."
                                    autoComplete="on"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sidebar-item recent-posts">
                            <div className="sidebar-heading">
                                <h2>Recent Posts</h2>
                                {latest3Posts.map((p) => (
                                    <RecentPosts key={p.id} {...p} />
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
                                        <a href="#">- Nature Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="#">- Awesome Layouts</a>
                                    </li>
                                    <li>
                                        <a href="#">- Creative Ideas</a>
                                    </li>
                                    <li>
                                        <a href="#">- Responsive Templates</a>
                                    </li>
                                    <li>
                                        <a href="#">- HTML5 / CSS3 Templates</a>
                                    </li>
                                    <li>
                                        <a href="#">- Creative &amp; Unique</a>
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
