import { Link } from "react-router-dom";

import formatDate from "../../utils/FormatDate";

import usePostComments from "../../hooks/usePostComments";

export default function BlogSinglePostItemNoComments({
    author,
    title,
    imgUrl,
    category,
    content,
    createdAt,
    tags,
    id,
    comments,
}) {
    const excerpt = content.slice(0, 250) + "...";
    const postComments = usePostComments(comments, id);

    return (
        <section className="blog-posts grid-system">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-post">
                            <div className="blog-thumb">
                                <img src={imgUrl} alt={title} />
                            </div>
                            <div className="down-content">
                                <span>
                                    {Object.entries(category)
                                        .filter(([key, value]) => value)
                                        .map(([key]) => key)
                                        .join(", ")}
                                </span>
                                <Link to={`/blog/${id}`}>
                                    <h4>{title}</h4>
                                </Link>
                                <ul className="post-info">
                                    <li>
                                        <a href="#">{author}</a>
                                    </li>
                                    <li>
                                        <Link
                                            to={`posts/${formatDate(
                                                createdAt
                                            )}`}
                                        >
                                            {formatDate(createdAt)}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/blog/${id}`}>
                                            {postComments.length} Comments
                                        </Link>
                                    </li>
                                </ul>
                                <p>{excerpt}</p>
                                <div className="post-options">
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="post-tags">
                                                <li>
                                                    <i className="fa fa-tags"></i>
                                                </li>
                                                {tags
                                                    .split(",")
                                                    .map((tag) => tag.trim())
                                                    .filter((tag) => tag !== "")
                                                    .map((tag) => (
                                                        <li key={tag}>
                                                            <a href="#">
                                                                {tag}
                                                            </a>
                                                        </li>
                                                    ))
                                                    .reduce((prev, curr) => [
                                                        prev,
                                                        <li key="comma">
                                                            , &nbsp;
                                                        </li>,
                                                        curr,
                                                    ])}
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="post-share">
                                                <li>
                                                    <i className="fa fa-share-alt"></i>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Facebook
                                                    </a>
                                                    ,
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://twitter.com/intent/tweet"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
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
                </div>
            </div>
        </section>
    );
}
