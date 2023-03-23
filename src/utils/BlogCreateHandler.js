import { useState } from "react";
import BlogCreate from "./BlogCreateOld";

function BlogForm() {
    const [docId, setDocId] = useState("");

    const handleCreateBlog = async () => {
        try {
            const docRef = await BlogCreate();
            setDocId(docRef.id);
        } catch (e) {
            console.error("Error creating blog BLOG FORM: ", e);
        }
    };

    return (
        <div>
            <button onClick={handleCreateBlog}>Create Blog</button>
            {docId && <p>Document written with ID: {docId}</p>}
        </div>
    );
}

export default BlogForm;
