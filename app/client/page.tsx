"use client";
import React from "react";
import styles from "../page.module.scss";

export default function Page() {
  const [error, setError] = React.useState(false);
  const handleGetError = () => {
    setError(true);
  };
  return (
    <>{error ? Error() : <button onClick={handleGetError} className={styles.navItem}>get Error</button>}</>
  );
}
