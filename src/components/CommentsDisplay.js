import formatDate from "../utils/FormatDate";

export default function CommentsDisplay({ postComments }) {
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
                                                {" "}
                                                {formatDate(comment.createdAt)}
                                            </span>
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
