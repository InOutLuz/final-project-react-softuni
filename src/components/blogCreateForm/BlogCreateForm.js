import { useState, useContext } from "react";
import BlogCreate from "../../utils/BlogCreate";
import { UserContext } from "../contexts/userContext";
import styles from "./BlogCreateForm.module.css";
import FormInput from "../formInput/FormInput";
import BlogDetailsBanner from "../BlogDetailsBanner";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const CreateBlogForm = ({ user, OnAddPost }) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        categoryIT: false,
        categoryBusiness: false,
        categoryNews: false,
        tags: "",
        imgUrl: "",
    });

    const { currentUser } = useContext(UserContext);

    function validateForm(formData) {
        const requiredFields = ["title", "content", "tags", "imgUrl"];
        for (let i = 0; i < requiredFields.length; i++) {
            const fieldName = requiredFields[i];
            if (!formData[fieldName]) {
                return false;
            }
        }
        return true;
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm(formData)) {
            alert("Please fill in all fields");
            return;
        }
        const { title, content, tags, imgUrl } = formData;
        const category = {
            IT: formData.categoryIT,
            Business: formData.categoryBusiness,
            News: formData.categoryNews,
        };

        const author = user.displayName;

        const blogData = { author, title, content, category, tags, imgUrl };

        try {
            const createdPost = await BlogCreate(blogData, currentUser);

            OnAddPost(createdPost);

            setFormData({
                author: "",
                title: "",
                content: "",
                categoryIT: false,
                categoryBusiness: false,
                categoryNews: false,
                tags: "",
                imgUrl: "",
            });
        } catch (error) {
            console.error(error); // handle any errors that occurred while creating the post
        }
    };

    return (
        <>
            <BlogDetailsBanner
                blogName="New post"
                subtitle="Create a new blog post"
            />
            {currentUser ? (
                <>
                    <h2 className={styles.h2}>Create a new post</h2>
                    <span className={styles.span}>
                        Fill up the form to create a new blog post
                    </span>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <FormInput
                            label="Title:"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Content:"
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            type="textarea"
                        />

                        <div className={styles.checkboxContainer}>
                            <div className={styles.checkboxLabelContainer}>
                                <FormInput
                                    label="IT:"
                                    id="categoryIT"
                                    name="categoryIT"
                                    type="checkbox"
                                    checked={formData.categoryIT}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.checkboxLabelContainer}>
                                <FormInput
                                    label="Business:"
                                    id="categoryBusiness"
                                    name="categoryBusiness"
                                    type="checkbox"
                                    checked={formData.categoryBusiness}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.checkboxLabelContainer}>
                                <FormInput
                                    label="News:"
                                    id="categoryNews"
                                    name="categoryNews"
                                    type="checkbox"
                                    checked={formData.categoryNews}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <FormInput
                            label="Tags:"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Image URL:"
                            id="imgUrl"
                            name="imgUrl"
                            value={formData.imgUrl}
                            onChange={handleChange}
                        />

                        <Button buttonType="submit">Submit</Button>
                    </form>
                </>
            ) : (
                <center>
                    <h2>You have to be signed-in to create a new post!</h2>
                    <span>Please sing-in first</span>
                </center>
            )}
        </>
    );
};

export default CreateBlogForm;
