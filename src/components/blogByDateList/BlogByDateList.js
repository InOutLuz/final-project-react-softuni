import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BlogSinglePostItemNoComments from "../blogSinglePostItemNoComments/BlogSinglePostItemNoComments";
import DownloadBanner from "../downloadBanner/DownloadBanner";
import InnerPageInformationBanner from "../innerPagesInformationBanner/InnerPageInformationBanner";

import formatDate from "../../utils/FormatDate";

export default function BlogByDateList({ posts, comments }) {
    const [latestPosts, setLatestPosts] = useState([]);
    const { datePosted } = useParams(); //

    const filteredPosts = posts.filter(
        (p) => formatDate(p.createdAt) === datePosted
    );

    const sortedPosts = filteredPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    useEffect(() => {
        setLatestPosts(sortedPosts);
    }, []);

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
