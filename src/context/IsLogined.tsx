
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextProps {
  accessToken: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<boolean>(false);

  useEffect(() => {
    axios
    .post("/api/info/cookie")
    .then((response) => {
    if (response.data && response.data.isCookie) {
      setAccessToken(true);
    } else {
      setAccessToken(false);
    }
  })
    .catch(() => {
    setAccessToken(false);
  });
  }, []);
  
  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
