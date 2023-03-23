import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogSinglePost from "./BlogSinglePost";
import formatDate from "../utils/FormatDate";
import DownloadBanner from "./DownloadBanner";
import BlogDetailsBanner from "./BlogDetailsBanner";

export default function BlogByDateDisplay({ posts }) {
    const [latestPosts, setLatestPosts] = useState([]);
    const { datePosted } = useParams(); // get the date parameter from the URL

    // Filter posts by date
    const filteredPosts = posts.filter(
        (p) => formatDate(p.createdAt) === datePosted
    );

    // Sort filtered posts by date in descending order
    const sortedPosts = filteredPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    // Update the latestPosts state with the sorted posts
    useEffect(() => {
        setLatestPosts(sortedPosts);
    }, []);

    return (
        <>
            <BlogDetailsBanner
                blogName={datePosted}
                subtitle={"All post from:"}
            />
            <DownloadBanner />
            {latestPosts.map((p) => (
                <BlogSinglePost key={p.id} {...p} />
            ))}
        </>
    );
}
