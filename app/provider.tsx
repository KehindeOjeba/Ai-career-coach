"use client";

import React, { useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
