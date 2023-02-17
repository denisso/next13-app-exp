"use client";
import { useRouter } from "next/navigation";
import styles from "./ClientComponent.module.scss";
import React from "react";

export const ClientComponent = () => {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const [isPending, startTransition] = React.useTransition();
  const [isfetch, setIsFetch] = React.useState(false);

  async function handleSet() {
    setIsFetch(true);
    await fetch(`${window.location.origin}/api/hello/?value=${input}`);
    setIsFetch(false);
  }
  async function handleGet() {
    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button
          onClick={handleSet}
          {...(isPending || isfetch ? { disabled: true } : {})}
          className={styles.button}
        >
          Set server data
        </button>
        <button
          onClick={handleGet}
          {...(isPending || isfetch ? { disabled: true } : {})}
          className={styles.button}
        >
          Revalidate client data
        </button>
      </div>
    </div>
  );
};
