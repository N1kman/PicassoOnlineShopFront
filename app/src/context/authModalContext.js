import { createContext, useState } from "react";
import AuthModal from "../components/authModal/AuthModal";

const initialState = {
    openAuthModal: function () { },
    closeAuthModal: function () { },
}

export const AuthModalContext = createContext(initialState)

function AuthModalLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const contextValue = {
        openAuthModal: function () {
            setIsOpen(true)
        },
        closeAuthModal: function () {
            setIsOpen(false)
        },
    }

    return (
        <AuthModalContext.Provider value={contextValue}>
            {children}
            {isOpen && <AuthModal />}
        </AuthModalContext.Provider>
    );
}

export default AuthModalLayout;