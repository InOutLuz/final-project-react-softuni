import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

import { addComment } from "../../utils/Firebase.utils";

export default function CommentAdd(postId) {
    const { currentUser } = useContext(UserContext);
    const owner = currentUser?.uid || null;
    const { userDisplayName } = useContext(UserContext);
    const ownerDisplayName = userDisplayName.displayName;
    const [content, setContent] = useState("");

    console.log(ownerDisplayName);

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const newComment = await addComment(
                postId,
                ownerDisplayName,
                content,
                owner
            );
            console.log("New comment added: ", newComment);
            setContent("");
        } catch (e) {
            console.error("Error adding comment: ", e);
        }
    };

    console.log(postId);

    return (
        <div className="col-lg-12">
            <div className="sidebar-item submit-comment">
                <div className="sidebar-heading">
                    <h2>Your comment</h2>
                </div>
                <div className="content">
                    <form id="comment" action="#" method="post">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input
                                        type="text"
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                        placeholder="Content"
                                    />
                                    <button onClick={handleAddComment}>
                                        Add Comment
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
