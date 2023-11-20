import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error("Error al analizar los datos del usuario en localStorage:", error);
        localStorage.removeItem("user"); 
        return null;
      }
    }
    return null;
  });

  function onLogin(response) {
   
    const userData = response.user;
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  function onLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const value = {
    user,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext); }