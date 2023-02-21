"use client";
import React from "react";

interface IContexte {
  id: string;
  setId: (id: string) => void;
  isPending: boolean;
  setPending: (pending: boolean) => void;
}

export const Context = React.createContext<IContexte | null>(null);

export function ClientContext({ children }: { children: React.ReactNode }) {
  const [id, setId] = React.useState("");
  const [isPending, setPending] = React.useState(false);
  return (
    <Context.Provider value={{ id, setId, isPending, setPending }}>
      {children}
    </Context.Provider>
  );
}
