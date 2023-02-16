"use client";
import styles from "./Page.module.scss";
import React from "react";
import { Context } from "@/app/ClientContext";

export const Page = ({ headerText }: { headerText: string; }) => {
  const context = React.useContext(Context);
  const [input, setInput] = React.useState(context?.id as string);
  const handlerSetId = () => {
    context?.setId(input);
  };
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{headerText}</h2>
      <div>Current id: {context?.id} </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={styles.input}
        />
        <button onClick={handlerSetId} className={styles.button}>
          setId
        </button>
      </div>
    </section>
  );
};
