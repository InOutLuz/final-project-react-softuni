import formatDate from "../../utils/FormatDate";

import { deleteComment } from "../../utils/Firebase.utils";

import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

import "./commentsDisplay.css";

export default function CommentsDisplay({ postComments, OnDeleteComment }) {
    const { currentUser } = useContext(UserContext);

    const handleDeleteComment = (comment) => {
        try {
            if (!currentUser || !currentUser.uid) {
                console.log("No user is currently logged in");
                return;
            }

            if (comment.owner !== currentUser.uid) {
                console.log("You are not the owner of this comment");
                return;
            }
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this comment?"
            );
            if (confirmDelete) {
                deleteComment(comment.id, currentUser);
                OnDeleteComment(comment.id, currentUser);
            }
        } catch (e) {
            console.error("Error deleting comment: ", e);
            throw e;
        }
    };

    return (
        <div className="col-lg-12">
            <div className="sidebar-item comments">
                <div className="sidebar-heading">
                    <h2>{postComments.length} comments</h2>
                </div>

                <div className="content">
                    {postComments.length === 0 ? (
                        <p>No comments yet</p>
                    ) : (
                        <ul>
                            {postComments.map((comment) => (
                                <li key={comment.id}>
                                    <div className="author-thumb">
                                        <img
                                            src="../assets/images/comment-author-01.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="right-content">
                                        <h4>
                                            {comment.ownerDisplayName}
                                            <span>
                                                {formatDate(comment.createdAt)}
                                            </span>
                                            {currentUser &&
                                                comment.owner ===
                                                    currentUser.uid && (
                                                    <button
                                                        id="deleteComment"
                                                        onClick={() =>
                                                            handleDeleteComment(
                                                                comment
                                                            )
                                                        }
                                                    >
                                                        x
                                                    </button>
                                                )}
                                        </h4>
                                        <p>{comment.content}</p>
                                    </div>
                                </li>
                            ))}

                            {/* <li className="replied">
                  <div className="author-thumb">
                    <img src="../assets/images/comment-author-02.jpg" alt="" />
                  </div>
                  <div className="right-content">
                    <h4>
                      Thirteen Man
                      <span>May 22, 2020</span>
                    </h4>
                    <p>
                      Mauris sit amet justo vulputate, cursus massa congue,
                      vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
                      feugiat viverra leo.
                    </p>
                  </div>
                </li> */}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
