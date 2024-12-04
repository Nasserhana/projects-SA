import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => set({ user: { email, password } }),
  logout: () => set({ user: null }),
}));