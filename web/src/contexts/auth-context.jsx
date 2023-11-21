import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Intenta obtener los datos del usuario desde localStorage
    const storedUser = localStorage.getItem("user");

    try {
      // Intenta analizar los datos del usuario
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;

      // Verifica si los datos analizados son válidos antes de establecer el estado
      if (parsedUser && typeof parsedUser === "object") {
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }, []);

  const onLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
