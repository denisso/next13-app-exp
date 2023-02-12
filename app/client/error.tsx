"use client";
import styles from "../error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Client error</h2>
      <div>{error.message}</div>
      <div>
        <button onClick={reset} className={styles.navItem}>Reset</button>
      </div>
    </div>
  );
}
