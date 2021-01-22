import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/apiClient';

interface AuthState {
  token: string;
  userSessionResponse: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  userSessionResponse: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const userSessionResponse = localStorage.getItem('@GoBarber:user');

    if (token && userSessionResponse) {
      return { token, userSessionResponse: JSON.parse(userSessionResponse) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, userSessionResponse } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(userSessionResponse));

    setData({ token, userSessionResponse });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userSessionResponse: data.userSessionResponse, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
