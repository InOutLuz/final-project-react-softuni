import formatDate from "../utils/FormatDate";
import { Link } from "react-router-dom";

export default function SinglePost({
    author,
    title,
    imgUrl,
    category,
    content,
    createdAt,
    tags,
    id,
}) {
    const excerpt = content.slice(0, 250) + "...";

    return (
        <section className="blog-posts grid-system">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-post">
                            <div className="blog-thumb">
                                <img src={`${imgUrl}`} alt="" />
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
                                        <a href="#">10 Comments</a>
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
                                                    <a href="#">Facebook</a>,
                                                </li>
                                                <li>
                                                    <a href="#"> Twitter</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <CommentsDisplay />
                                <CommentsSubmit /> */}
                </div>

                {/*  <BlogSidebar posts={latest3Posts} /> */}
            </div>
        </section>
    );
}
