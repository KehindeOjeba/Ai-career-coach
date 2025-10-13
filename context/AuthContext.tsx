"use client";

import { createContext } from "react";
import { UserResource } from "@clerk/types"; // Clerk provides this user type

interface AuthContextType {
  user: UserResource | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
