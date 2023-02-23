"use client";
import React from "react";

export enum EFetchSide {
  client="client",
  server="server",
}

interface IContexte {
  // if you did not start working from the home page,
  // this id will be used in the Nav component
  id: string;
  setId: (id: string) => void;
  // await server rendering [id]/page.tsx
  // setting in Nav, uses in ClientComponent
  isPending: boolean;
  setPending: (pending: boolean) => void;
  // choosing between the client and server fetch function
  fetchSide: EFetchSide;
  setFetchSide: (side: EFetchSide) => void;
}

export const Context = React.createContext<IContexte | null>(null);

export function ClientContext({ children }: { children: React.ReactNode }) {
  const [id, setId] = React.useState("");
  const [isPending, setPending] = React.useState(false);
  const [fetchSide, setFetchSide] = React.useState<EFetchSide>(EFetchSide.server);
  return (
    <Context.Provider value={{ id, setId, isPending, setPending, fetchSide, setFetchSide }}>
      {children}
    </Context.Provider>
  );
}
