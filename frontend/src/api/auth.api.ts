import apiClient from './client';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
    avatar?: string;
  };
}

export interface VerifyResponse {
  success: boolean;
  message: string;
}

/**
 * Authenticate admin and receive JWT.
 */
export const login = (data: LoginData) =>
  apiClient.post<LoginResponse>('/api/auth/login', data);

/**
 * Verify current JWT token.
 */
export const verifyToken = () =>
  apiClient.get<VerifyResponse>('/api/auth/verify');
