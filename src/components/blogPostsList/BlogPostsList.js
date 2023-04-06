import BlogSinglePostItemNoComments from "../blogSinglePostItemNoComments/BlogSinglePostItemNoComments";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import { Link } from "react-router-dom";

export default function BlogPostsList({ posts, latest3Posts, comments }) {
    return (
        <>
            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-post">
                                            {posts.length === 0 ? (
                                                <h1>
                                                    Sorry we didn't find any
                                                    posts matching your search.
                                                </h1>
                                            ) : (
                                                posts.map((p) => (
                                                    <BlogSinglePostItemNoComments
                                                        key={p.id}
                                                        {...p}
                                                        comments={comments}
                                                    />
                                                ))
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <Link to={"/all-posts"}>
                                                View All Posts
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar latest3Posts={latest3Posts} />
                    </div>
                </div>
            </section>
        </>
    );
}
