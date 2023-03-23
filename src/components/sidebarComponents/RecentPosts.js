import { Link } from "react-router-dom";
import formatDate from "../../utils/FormatDate";
export default function RecentPosts({ id, title, createdAt }) {
    return (
        <div className="content">
            <ul>
                <li>
                    <Link to={`/blog/${id}`}>
                        <h5>{title}</h5>{" "}
                    </Link>
                    <Link to={`/posts/${formatDate(createdAt)}`}>
                        <span>{formatDate(createdAt)}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
