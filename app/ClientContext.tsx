"use client";
import React from "react";

interface IContexte {
  id: string;
  setId: (id: string) => void;
}

export const Context = React.createContext<IContexte | null>(null);

export function ClientContext({ children }: { children: React.ReactNode }) {
  const [id, setId] = React.useState("");
  return <Context.Provider value={{ id, setId }}>{children}</Context.Provider>;
}
