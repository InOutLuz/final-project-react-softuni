import formatDate from "../utils/FormatDate";
import { Link } from "react-router-dom";

import "./Banner.css";

export default function Banner({
    author,
    title,
    imgUrl,
    category,
    createdAt,
    id,
}) {
    return (
        <div className="item">
            <img src={imgUrl} alt="" />
            <div className="item-content">
                <div className="main-content">
                    <div className="meta-category">
                        <span>
                            {Object.entries(category)
                                .filter(([key, value]) => value)
                                .map(([key]) => key)
                                .join(", ")}
                        </span>
                    </div>
                    <Link to={`/blog/${id}`}>
                        <h4>{title}</h4>
                    </Link>
                    <ul className="post-info">
                        <li>
                            <a href="#">{author}</a>
                        </li>
                        <li>
                            <Link to={`posts/${formatDate(createdAt)}`}>
                                {formatDate(createdAt)}
                            </Link>
                        </li>
                        <li>
                            <a href="#">12 Comments</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
