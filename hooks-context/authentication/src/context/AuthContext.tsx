import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import type { AuthResponse, Profile } from '../types';

const API_URL = 'http://localhost:7070';
const TOKEN_KEY = 'ra16.auth.token';
const PROFILE_KEY = 'ra16.auth.profile';

type AuthContextValue = {
  token: string | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  authFetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredProfile(): Profile | null {
  const rawProfile = localStorage.getItem(PROFILE_KEY);

  if (!rawProfile) {
    return null;
  }

  try {
    return JSON.parse(rawProfile) as Profile;
  } catch {
    localStorage.removeItem(PROFILE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [profile, setProfile] = useState<Profile | null>(() => readStoredProfile());

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(PROFILE_KEY);
    setToken(null);
    setProfile(null);
  }, []);

  const authFetch = useCallback(
    async (input: RequestInfo | URL, init: RequestInit = {}) => {
      if (!token) {
        throw new Error('Пользователь не авторизован');
      }

      const headers = new Headers(init.headers);
      headers.set('Authorization', `Bearer ${token}`);

      const response = await fetch(input, { ...init, headers });

      if (response.status === 401) {
        logout();
        throw new Error('Сессия истекла');
      }

      return response;
    },
    [logout, token],
  );

  const login = useCallback(
    async (loginValue: string, password: string) => {
      const authResponse = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: loginValue, password }),
      });

      if (!authResponse.ok) {
        const message = await authResponse
          .json()
          .then((body: { message?: string }) => body.message)
          .catch(() => null);
        throw new Error(message || `Ошибка авторизации: ${authResponse.status}`);
      }

      const { token: nextToken } = (await authResponse.json()) as AuthResponse;
      const profileResponse = await fetch(`${API_URL}/private/me`, {
        headers: {
          Authorization: `Bearer ${nextToken}`,
        },
      });

      if (profileResponse.status === 401) {
        logout();
        throw new Error('Сессия истекла');
      }

      if (!profileResponse.ok) {
        throw new Error(`Ошибка загрузки профиля: ${profileResponse.status}`);
      }

      const nextProfile = (await profileResponse.json()) as Profile;

      localStorage.setItem(TOKEN_KEY, nextToken);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(nextProfile));
      setToken(nextToken);
      setProfile(nextProfile);
    },
    [logout],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      profile,
      isAuthenticated: Boolean(token && profile),
      login,
      logout,
      authFetch,
    }),
    [authFetch, login, logout, profile, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
