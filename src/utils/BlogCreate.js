import { db } from "../utils/Firebase.utils";
import { addDoc, collection } from "firebase/firestore";

const BlogCreate = async (formData, currentUser) => {
    const { author, title, content, category, tags, imgUrl } = formData;

    try {
        const createdAt = new Date();
        const docRef = await addDoc(collection(db, "blog-posts"), {
            author,
            title,
            content,
            category,
            tags,
            owner: currentUser.uid,
            createdAt,
            imgUrl,
        });

        console.log("Document written with ID: ", docRef.id);
        return docRef;
    } catch (e) {
        console.error("Error adding document BLOGCREATE: ", e);
        throw e;
    }
};

export default BlogCreate;
