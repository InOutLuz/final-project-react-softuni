export default function CommentsDisplay() {
    return (
        <div className="col-lg-12">
            <div className="sidebar-item comments">
                <div className="sidebar-heading">
                    <h2>4 comments</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="author-thumb">
                                <img
                                    src="../assets/images/comment-author-01.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right-content">
                                <h4>
                                    Charles Kate
                                    <span>May 16, 2020</span>
                                </h4>
                                <p>
                                    Fusce ornare mollis eros. Duis et diam vitae
                                    justo fringilla condimentum eu quis leo.
                                    Vestibulum id turpis porttitor sapien
                                    facilisis scelerisque. Curabitur a nisl eu
                                    lacus convallis eleifend posuere id tellus.
                                </p>
                            </div>
                        </li>
                        <li className="replied">
                            <div className="author-thumb">
                                <img
                                    src="../assets/images/comment-author-02.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right-content">
                                <h4>
                                    Thirteen Man
                                    <span>May 20, 2020</span>
                                </h4>
                                <p>
                                    In porta urna sed venenatis sollicitudin.
                                    Praesent urna sem, pulvinar vel mattis eget.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="author-thumb">
                                <img
                                    src="../assets/images/comment-author-03.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right-content">
                                <h4>
                                    Belisimo Mama
                                    <span>May 16, 2020</span>
                                </h4>
                                <p>
                                    Nullam nec pharetra nibh. Cras tortor nulla,
                                    faucibus id tincidunt in, ultrices eget
                                    ligula. Sed vitae suscipit ligula.
                                    Vestibulum id turpis volutpat, lobortis
                                    turpis ac, molestie nibh.
                                </p>
                            </div>
                        </li>
                        <li className="replied">
                            <div className="author-thumb">
                                <img
                                    src="../assets/images/comment-author-02.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right-content">
                                <h4>
                                    Thirteen Man
                                    <span>May 22, 2020</span>
                                </h4>
                                <p>
                                    Mauris sit amet justo vulputate, cursus
                                    massa congue, vestibulum odio. Aenean elit
                                    nunc, gravida in erat sit amet, feugiat
                                    viverra leo.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}