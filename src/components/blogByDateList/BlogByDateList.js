import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BlogSinglePostItemNoComments from "../blogSinglePostItemNoComments/BlogSinglePostItemNoComments";
import DownloadBanner from "../downloadBanner/DownloadBanner";
import InnerPageInformationBanner from "../innerPagesInformationBanner/InnerPageInformationBanner";

import formatDate from "../../utils/FormatDate";

export default function BlogByDateList({ posts, comments }) {
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
    }, [sortedPosts]);

    return (
        <>
            <InnerPageInformationBanner
                blogName={datePosted}
                subtitle={"All post from:"}
            />
            <DownloadBanner />
            {latestPosts.map((p) => (
                <BlogSinglePostItemNoComments
                    key={p.id}
                    {...p}
                    comments={comments}
                />
            ))}
        </>
    );
}
