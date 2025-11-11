// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import FindPersonPage from "./pages/FindPersonPage";

function AppRoutes(): React.JSX.Element {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Redireciona a raiz para o login ou dashboard */}
      <Route
        path="/"
        element={
          <Navigate to={isAuthenticated ? "/find-person" : "/login"} replace />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rota Protegida */}
      <Route
        path="/find-person"
        element={
          <ProtectedRoute>
            <FindPersonPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
    </Routes>
  );
}

// O App final que encapsula o contexto de autenticação
export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
