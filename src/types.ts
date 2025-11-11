// src/types.ts

// Tipos básicos para as credenciais
export interface AuthCredentials {
  email: string;
  password: string;
}

// Tipo de dados para o usuário (se for usado)
export interface User {
  id: number;
  name: string;
  email: string;
}

// Tipo de dados para um item do CRUD (adapte conforme seu backend)
export interface Item {
  id: number; // Ou string se o MongoDB/PostgreSQL usar ObjectId/UUID
  title: string;
  description: string;
  // Outros campos...
}

// Resposta esperada do login do seu backend
export interface LoginResponse {
  auth: boolean;
  token: string;
  message?: string;
}

// Contexto de Autenticação
export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: () => void;
  handleLogout: () => void;
}