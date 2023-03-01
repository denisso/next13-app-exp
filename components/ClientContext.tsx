"use client";
import React from "react";
import { EFetchSide } from "./types";

// type TDataApp = {
//   client: { [id: string]: {value: string; count: number} };
//   server: { [id: string]: {value: string; count: number} };
// };

interface IContexte {
  // if you did not start working from the home page,
  // this id will be used in the Nav component
  id: string;
  setId: (id: string) => void;
  // await server rendering [id]/page.tsx
  // setting in Nav, uses in ClientComponent
  isPending: boolean;
  setPending: (pending: boolean) => void;
  // choosing between the client and server fetch function, 
  // setting radion (switch client/server) buttons in Nav component
  // if starts not from home page, for example /client/1
  fetchSide: EFetchSide;
  setFetchSide: (side: EFetchSide) => void;
  // client and server data
  // data: TDataApp;
  // setData: (data: TDataApp) => void;
  // not implemented yet
  timezoneOffset: number;
  setTimezoneOffset: (timezoneOffset: number) => void;
}

export const Context = React.createContext<IContexte | null>(null);

export function ClientContext({ children }: { children: React.ReactNode }) {
  const [id, setId] = React.useState("");
  const [isPending, setPending] = React.useState(false);
  const [fetchSide, setFetchSide] = React.useState<EFetchSide>(
    EFetchSide.server
  );
  // const [data, setData] = React.useState({ client: {}, server: {} });
  const [timezoneOffset, setTimezoneOffset] = React.useState(0);
  return (
    <Context.Provider
      value={{
        id,
        setId,
        isPending,
        setPending,
        fetchSide,
        setFetchSide,
        // data,
        // setData,
        timezoneOffset,
        setTimezoneOffset,
      }}
    >
      {children}
    </Context.Provider>
  );
}
