"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // Loading state

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("id");

        if (token && userId) {
            setUser({ userId, token });
        }
        setLoading(false);  // Set loading to false after checking session
    }, []);

    const LogOut = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
        setUser(null);
    };

    if (loading) {
        return <div>Loading...</div>;  // Show loading state
    }

    return (
        <AuthContext.Provider value={{ user, LogOut, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
