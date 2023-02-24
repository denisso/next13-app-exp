"use client";
import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
import { TData } from "@/lib/fetchData";

interface IClientComponent {
  (args: { id: string; data?: TData }): JSX.Element;
}

export const ClientComponent: IClientComponent = function ({ data, id }) {
  const context = React.useContext(Context);
  const [message, setMessage] = React.useState("");
  console.log(context?.data);
  React.useEffect(() => {
    context?.setId(id);

    if (!data) return;
    setMessage(
      `In cache: ${context?.data?.[context?.fetchSide]?.[id]} and Payload ${
        data?.payload
      }`
    );
    if (context?.data?.[context?.fetchSide]?.[id]) {
      // if (context?.data?.[context?.fetchSide]?.[id] === data.payload) {
      // }
    } else {
      if (context?.data?.[context?.fetchSide] instanceof Object)
        Object.assign(context?.data?.[context?.fetchSide], {
          [id]: data.payload,
        });
      // const data = { data: { [context?.fetchSide as string]: 123 } };
      // context?.data?.[context?.fetchSide]?.[id] = data.payload
    }
  }, [context, id, data]);

  return (
    <div className={styles.content}>
      <div>ID: {id}</div>
      <div>{message}</div>
    </div>
  );
};
