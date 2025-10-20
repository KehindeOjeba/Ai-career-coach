"use client";

import { createContext } from "react";

interface AuthContextType {
  user: {
    name?: string;
    email?: string;
  } | null;
  setUser: (user: { name?: string; email?: string } | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
