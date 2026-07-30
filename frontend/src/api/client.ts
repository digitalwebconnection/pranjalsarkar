/**
 * Shared HTTP client instance.
 * Centralizes base URL, headers, and auth token injection.
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  private buildUrl(path: string, params?: Record<string, string>): string {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }
    return url.toString();
  }

  async get<T>(path: string, options?: RequestOptions): Promise<T> {
    const response = await fetch(this.buildUrl(path, options?.params), {
      method: 'GET',
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error(`GET ${path} failed: ${response.statusText}`);
    return response.json();
  }

  async post<T>(path: string, body?: unknown): Promise<T> {
    const response = await fetch(this.buildUrl(path), {
      method: 'POST',
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) throw new Error(`POST ${path} failed: ${response.statusText}`);
    return response.json();
  }

  async put<T>(path: string, body?: unknown): Promise<T> {
    const response = await fetch(this.buildUrl(path), {
      method: 'PUT',
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) throw new Error(`PUT ${path} failed: ${response.statusText}`);
    return response.json();
  }

  async delete<T>(path: string): Promise<T> {
    const response = await fetch(this.buildUrl(path), {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error(`DELETE ${path} failed: ${response.statusText}`);
    return response.json();
  }
}

export const apiClient = new ApiClient(API_URL);
export default apiClient;
