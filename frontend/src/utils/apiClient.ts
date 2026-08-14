import { API_URL } from "../../config";

/**
 * Wrapper around native fetch that automatically injects the Admin JWT token
 * and handles global 401/403 responses by dispatching an event.
 */
export const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("adminToken");
  
  const headers = new Headers(options.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    window.dispatchEvent(new Event('auth-expired'));
  }

  return response;
};
