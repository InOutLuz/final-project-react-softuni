import formatDate from "../utils/FormatDate";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../utils/Firebase.utils";
import { doc, getDoc } from "firebase/firestore";
import Preloader from "./Preloader";

import BlogDetailsBanner from "./BlogDetailsBanner";
import CommentsDisplay from "./CommentsDisplay";
import CommentAdd from "./commentAdd/CommentAdd";
import DownloadBanner from "./DownloadBanner";
import BlogSidebar from "./BlogSidebar";

const BlogDetails = ({ posts, comments, handlePopupOpen, OnAddComment }) => {
    const { postId } = useParams();
    const [postComments, setPostComments] = useState([]);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const filteredComments = comments.filter(
            (comment) => comment.postId === postId
        );
        const sortedComments = filteredComments.sort(
            (a, b) => b.createdAt.toDate() - a.createdAt.toDate()
        );
        setPostComments(sortedComments);
    }, [comments, postId]);

    useEffect(() => {
        const getPost = async () => {
            const postRef = doc(db, "blog-posts", postId);
            const docSnapshot = await getDoc(postRef);
            if (docSnapshot.exists()) {
                setPost({ id: docSnapshot.id, ...docSnapshot.data() });
            } else {
                console.log("No such document!");
            }
            setLoading(false);
        };
        getPost();
    }, [postId]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <>
            <BlogDetailsBanner
                blogName={post.title}
                subtitle={"Post details"}
            />
            <DownloadBanner />

            <section className="blog-posts grid-system">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-post">
                                            {post && (
                                                <div className="blog-thumb">
                                                    <img
                                                        src={`${post.imgUrl}`}
                                                        alt="Blog Image"
                                                    />
                                                </div>
                                            )}

                                            <div className="down-content">
                                                <span>
                                                    {Object.entries(
                                                        post.category
                                                    )
                                                        .filter(
                                                            ([key, value]) =>
                                                                value
                                                        )
                                                        .map(([key]) => key)
                                                        .join(", ")}
                                                </span>
                                                <a href={`/blog/${post.id}`}>
                                                    <h4>{post.title}</h4>
                                                </a>
                                                <ul className="post-info">
                                                    <li>
                                                        <a href="#">
                                                            {post.author}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {formatDate(
                                                                post.createdAt
                                                            )}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {
                                                                postComments.length
                                                            }
                                                            &nbsp; Comments
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p>{post.content}</p>
                                                <div className="post-options">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <ul className="post-tags">
                                                                <li>
                                                                    <i className="fa fa-tags"></i>
                                                                </li>
                                                                {post.tags &&
                                                                    post.tags
                                                                        .length >
                                                                        0 &&
                                                                    post.tags
                                                                        .split(
                                                                            ","
                                                                        )
                                                                        .map(
                                                                            (
                                                                                tag,
                                                                                index,
                                                                                array
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        tag
                                                                                    }
                                                                                >
                                                                                    <a
                                                                                        href={`#${tag.trim()}`}
                                                                                    >
                                                                                        {tag.trim()}
                                                                                    </a>
                                                                                    {index !==
                                                                                        array.length -
                                                                                            1 &&
                                                                                        ", "}
                                                                                    &nbsp;
                                                                                </li>
                                                                            )
                                                                        )}
                                                            </ul>
                                                        </div>
                                                        <div className="col-6">
                                                            <ul className="post-share">
                                                                <li>
                                                                    <i className="fa fa-share-alt"></i>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Facebook
                                                                    </a>
                                                                    ,
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Twitter
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <CommentsDisplay
                                        postComments={postComments}
                                    />

                                    <CommentAdd
                                        postId={postId}
                                        handlePopupOpen={handlePopupOpen}
                                        OnAddComment={OnAddComment}
                                    />
                                </div>
                            </div>
                        </div>
                        <BlogSidebar posts={posts} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
