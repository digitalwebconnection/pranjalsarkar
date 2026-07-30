import { useAuthContext } from '../context/AuthContext';

/**
 * Convenience hook for auth operations.
 * Re-exports from AuthContext for cleaner imports.
 */
export function useAuth() {
  return useAuthContext();
}

export default useAuth;
