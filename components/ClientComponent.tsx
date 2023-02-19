"use client";
import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
export const ClientComponent = function ({
  id,
  data,
}: {
  id: string;
  data: string;
}) {
  const context = React.useContext(Context);
  React.useEffect(() => {
    context?.setId(id);
  });
  return (
    <div className={styles.content}>
      <div>ID: {id}</div>
      <div>{data}</div>
    </div>
  );
};
