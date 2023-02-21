"use client";
import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
import { Spinner } from "./Spinner";

export const ClientComponent = function ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(Context);

  React.useEffect(() => {
    context?.setId(id);
  }, [context, id]);

  return (
    <div className={styles.content}>
      <div>ID: {id}</div>
      {context?.isPending ? <Spinner /> : <div>{children}</div>}
    </div>
  );
};
