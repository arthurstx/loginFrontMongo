// src/services/auth.ts

import type { AuthCredentials, LoginResponse } from "../types";


const API_URL = import.meta.env.VITE_API_URL;

export async function register(name: string, { email, password }: AuthCredentials): Promise<void> {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  console.log('Resposta do registro:', data);
  if (!response.ok) {
    throw new Error(data.message || 'Falha no registro.');
  }
}

export async function login({ email, password }: AuthCredentials): Promise<string> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data: LoginResponse = await response.json();

  console.log('Resposta do login:', data);

  if (!response.ok) {
    throw new Error(data.message || 'Email ou senha inválidos.');
  }

  const token = data.token;
  localStorage.setItem('jwt_token', token);
  return token;
}

export function logout(): void {
  localStorage.removeItem('jwt_token');
}

export function getToken(): string | null {
  return localStorage.getItem('jwt_token');
}