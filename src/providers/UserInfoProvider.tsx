 import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (e:boolean)=>void;
  login: (username: string, password: string) => void;
  logout: () => void;
}
interface Props {
    children: React.ReactNode;
  }
  const defaultAuthContext: AuthContextType = {
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    login: () => {},
    logout: () => {},
  };

const AuthContext = createContext(defaultAuthContext);
const UserInfoProvider: React.FC<Props> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultAuthContext.isAuthenticated);
  
    const login = (username: string, password: string) => {
      // Simulate authentication logic
      if (username && password  ) { 
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,  login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  const useAuth = (): AuthContextType => useContext(AuthContext);
  
  export { UserInfoProvider, useAuth };