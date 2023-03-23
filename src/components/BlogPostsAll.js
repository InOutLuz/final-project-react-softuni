import BlogSinglePost from "./BlogSinglePost";
import BlogSidebar from "./BlogSidebar";

export default function BlogPostsAll({ posts, latest3Posts }) {
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
                                            {posts.map((p) => (
                                                <BlogSinglePost
                                                    key={p.id}
                                                    {...p}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="blog.html">
                                                View All Posts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar posts={latest3Posts} />
                    </div>
                </div>
            </section>
        </>
    );
}
