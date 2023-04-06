import BlogSidebar from "../components/blogSidebar/BlogSidebar";
import DownloadBanner from "../components/downloadBanner/DownloadBanner";
import InnerPageInformationBanner from "../components/innerPagesInformationBanner/InnerPageInformationBanner";
import { Link } from "react-router-dom";
import formatDate from "../utils/FormatDate";
import BlogSinglePostItemNoComments from "../components/blogSinglePostItemNoComments/BlogSinglePostItemNoComments";

export default function BlogGrid({ posts, comments }) {
    return (
        <>
            <InnerPageInformationBanner
                blogName="All posts"
                subtitle="Showing all posts"
            />

            <DownloadBanner />
            <section className="blog-posts grid-system">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    {/* {posts.map((p) => (
                                        <div key={p.id} className="col-lg-6">
                                            <div className="blog-post">
                                                <div className="blog-thumb">
                                                    <img
                                                        src={p.imgUrl}
                                                        alt={p.title}
                                                    />
                                                </div>
                                                <div className="down-content">
                                                    <span>
                                                        {Object.entries(
                                                            p.category
                                                        )
                                                            .filter(
                                                                ([
                                                                    key,
                                                                    value,
                                                                ]) => value
                                                            )
                                                            .map(([key]) => key)
                                                            .join(", ")}
                                                    </span>
                                                    <Link to={`/blog/${p.id}`}>
                                                        <h4>{p.title}</h4>
                                                    </Link>
                                                    <ul className="post-info">
                                                        <li>
                                                            <a href="#">
                                                                {p.author}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to={`../posts/${formatDate(
                                                                    p.createdAt
                                                                )}`}
                                                            >
                                                                {formatDate(
                                                                    p.createdAt
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                12 Comments
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        {p.content.slice(
                                                            0,
                                                            150
                                                        ) + "..."}
                                                    </p>
                                                    <div className="post-options">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <ul className="post-tags">
                                                                    <li>
                                                                        <i className="fa fa-tags"></i>
                                                                    </li>
                                                                    {p.tags
                                                                        .split(
                                                                            ","
                                                                        )
                                                                        .map(
                                                                            (
                                                                                tag
                                                                            ) =>
                                                                                tag.trim()
                                                                        )
                                                                        .filter(
                                                                            (
                                                                                tag
                                                                            ) =>
                                                                                tag !==
                                                                                ""
                                                                        )
                                                                        .map(
                                                                            (
                                                                                tag
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        tag
                                                                                    }
                                                                                >
                                                                                    <a href="#">
                                                                                        {
                                                                                            tag
                                                                                        }
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        )
                                                                        .reduce(
                                                                            (
                                                                                prev,
                                                                                curr
                                                                            ) => [
                                                                                prev,
                                                                                <li key="comma">
                                                                                    ,
                                                                                    &nbsp;
                                                                                </li>,
                                                                                curr,
                                                                            ]
                                                                        )}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))} */}

                                    {posts.map((p) => (
                                        <BlogSinglePostItemNoComments
                                            key={p.id}
                                            {...p}
                                            comments={comments}
                                        />
                                    ))}

                                    <div className="col-lg-12">
                                        <ul className="page-numbers">
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-double-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </>
    );
}
