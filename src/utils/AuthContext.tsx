import React, {createContext, useState, useContext, useEffect, ReactNode} from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    user: { username: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    fetchSession: () => Promise<void>;
}

const API_URL = process.env.BESTIE_APP_URL || 'http://localhost:8080';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ username: string } | null>(null);

    // Fetch session from the server
    const fetchSession = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/current-user`, {credentials: "include"});
            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(true);
                setUser(data.user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            console.error("Failed to fetch session", error);
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    // Login by sending credentials to the server
    const login = async (username: string, password: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include", // Ensures cookies are sent/received
                body: JSON.stringify({username, password}),
            });
            if (!response.ok) throw new Error("Login failed");
            await fetchSession(); // Refresh session info after login
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    // Logout by clearing the session on the server
    const logout = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
            if (!response.ok) throw new Error("Logout failed");
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    // Automatically fetch session on mount
    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout, fetchSession}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
