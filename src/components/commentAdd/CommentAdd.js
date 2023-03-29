import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import FormInput from "../formInput/FormInput";

import { addComment } from "../../utils/Firebase.utils";

import { UserContext } from "../../contexts/userContext";

export default function CommentAdd({ handlePopupOpen, OnAddComment, postId }) {
    const { currentUser } = useContext(UserContext);
    const owner = currentUser?.uid || null;
    const { userDisplayName } = useContext(UserContext);
    const ownerDisplayName = userDisplayName.displayName;
    const [content, setContent] = useState("");

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const newComment = await addComment(
                postId,
                ownerDisplayName,
                content,
                owner
            );
            const commentDetails = {
                id: newComment.id,
                postId,
                ownerDisplayName,
                content,
                owner,
                createdAt: newComment.createdAt,
            };
            console.log("New comment added: ", commentDetails);
            OnAddComment(newComment);
            setContent("");
        } catch (e) {
            console.error("Error adding comment: ", e);
        }
    };

    return (
        <div className="col-lg-12">
            <div className="sidebar-item submit-comment">
                <div className="sidebar-heading">
                    <h2>Your comment</h2>
                </div>
                <div className="content">
                    {currentUser ? (
                        <form id="comment" action="#" method="post">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <fieldset>
                                        <FormInput
                                            type="textarea"
                                            name="content"
                                            value={content}
                                            handleChange={(e) =>
                                                setContent(e.target.value)
                                            }
                                            label="Your comment"
                                        />
                                        <button onClick={handleAddComment}>
                                            Add Comment
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <span>
                            You have to be signed in to write a comment! &nbsp;
                            <Link to="#" onClick={handlePopupOpen}>
                                Sign in
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
