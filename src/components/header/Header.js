import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/userContext";

import { signOutUser } from "../../utils/Firebase.utils";

export default function Header({ handlePopupOpen }) {
    const { currentUser, setCurrentUser, setUserDisplayName } =
        useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
        setUserDisplayName("");
    };
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h2>
                            Stand Blog<em>.</em>
                        </h2>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">
                                    About Us
                                </a>
                            </li>
                            <Link className="nav-link" to="/all-posts">
                                Blog Entries
                            </Link>

                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                {currentUser ? (
                                    <>
                                        <Link
                                            className="nav-link"
                                            to="#"
                                            onClick={signOutHandler}
                                        >
                                            SIGN OUT
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="#"
                                        onClick={handlePopupOpen}
                                    >
                                        SIGN IN
                                    </Link>
                                )}
                            </li>
                            {currentUser && (
                                <li>
                                    <Link className="nav-link" to="/new-post">
                                        NEW POST
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
