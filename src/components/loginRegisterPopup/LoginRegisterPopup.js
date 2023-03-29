import "./LoginRegisterPopup.css";

import { useState, useRef, useEffect } from "react";

import SignInForm from "../signInForm/SignInForm";
import SignUpForm from "../signUpForm/SignUpForm";

export default function LoginRegisterPopup({ handlePopupClose }) {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const popupRef = useRef(null);

    const handleSwitchForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            handlePopupClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <div className="popup-overlay">
            <div className="sign-in-popup" ref={popupRef}>
                <button
                    className="close-popup-button"
                    onClick={handlePopupClose}
                >
                    X
                </button>
                {isSignInForm ? (
                    <SignInForm handlePopupClose={handlePopupClose} />
                ) : (
                    <SignUpForm handlePopupClose={handlePopupClose} />
                )}

                <a
                    className="popup-bottom-text"
                    href="#"
                    onClick={handleSwitchForm}
                >
                    {isSignInForm
                        ? "Don't have an account? Sign Up Now"
                        : "Already have an account? Sign In"}
                </a>
            </div>
        </div>
    );
}
