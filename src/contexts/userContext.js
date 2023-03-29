import { createContext, useState, useEffect } from "react";
import { db } from "../utils/Firebase.utils";
import { doc, getDoc } from "firebase/firestore";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    setUserDisplayName: () => null,
    userDisplayName: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userDisplayName, setUserDisplayName] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                const docSnapshot = await getDoc(userRef);
                if (docSnapshot.exists()) {
                    const userData = {
                        id: docSnapshot.id,
                        ...docSnapshot.data(),
                    };
                    setUserDisplayName(userData);
                } else {
                    console.log("No such user!");
                }
            }
        };
        getUser();
    }, [currentUser]);

    const value = {
        currentUser,
        setCurrentUser,
        userDisplayName,
        setUserDisplayName,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
