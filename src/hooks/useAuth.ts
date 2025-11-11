// src/hooks/useAuth.tsx
import React, { createContext, useContext, useState } from 'react';
import { getToken, logout } from '../services/auth';
import type { AuthContextType } from '../types';


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getToken());
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(!!getToken());
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    loading,
    setLoading,
    handleLogin,
    handleLogout,
  };

  return React.createElement(AuthContext.Provider, { value: contextValue }, children);
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};