import BlogPosts from "./BlogPosts";
import BlogCreateHandler from ".././utils/BlogCreateHandler";

export default function Home({ posts }) {
    return (
        <>
            <BlogPosts posts={posts} />
        </>
    );
}
